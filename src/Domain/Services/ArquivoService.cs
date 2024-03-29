﻿using Domain.Entities;
using Domain.Enums;
using Domain.Helpers;
using Domain.Interfaces.Repositories;
using Domain.Interfaces.Services;
using Domain.Interfaces.Uow;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;

namespace Domain.Services
{
    public class ArquivoService : ServiceBase<Arquivo>, IArquivoService
    {
        private readonly IArquivoRepository _arquivoRepository;
        private readonly ILogArquivoRepository _logArquivoRepository;
        private readonly ILayoutRepository _layoutRepository;
        private readonly IUnitOfWork _unitOfWork;

        public ArquivoService(IArquivoRepository arquivoRepository,
                              ILogArquivoRepository logArquivoRepository,
                              ILayoutRepository layoutRepository,
                              IUnitOfWork unitOfWork) : base(arquivoRepository)
        {
            _arquivoRepository = arquivoRepository;
            _layoutRepository = layoutRepository;
            _logArquivoRepository = logArquivoRepository;
            _unitOfWork = unitOfWork;
        }

        public List<Arquivo> ObterComFiltros(Arquivo filtros, DateTime de, DateTime ate)
        {
            return _arquivoRepository.ObterComFiltros(filtros, de, ate)
                                     .ToList();
        }

        public void SalvarArquivos(List<Arquivo> arquivos)
        {
            foreach (var arquivo in arquivos)
            {
                _arquivoRepository.Add(arquivo);
            }

            _unitOfWork.Commit();
        }

        public List<LogArquivo> ValidarArquivos(List<Arquivo> arquivos, bool salvarLog)
        {
            List<LogArquivo> logArquivosCriados = new List<LogArquivo>();

            var arquivoReferencia = arquivos.FirstOrDefault();

            // Obter layout por parametros de arquivo
            var layout = _layoutRepository.ObterComItens(arquivoReferencia)
                                          .ToList();

            foreach (var arquivo in arquivos)
            {
                logArquivosCriados.AddRange(ValidarArquivo(arquivo, layout));
                if (logArquivosCriados.Count(_ => _.EhValido && _.ArquivoId == arquivo.IdArquivo) == arquivo.LinhasArquivo.Count)
                {
                    arquivo.SetarEhValido(true);
                    _arquivoRepository.Update(arquivo);
                }
            }

            if (salvarLog) _unitOfWork.Commit();

            return logArquivosCriados;
        }

        private List<LogArquivo> ValidarArquivo(Arquivo arquivo, List<Layout> layout)
        {
            List<LogArquivo> logArquivosCriados = new List<LogArquivo>();

            //header
            var layoutValidacaoHeader = layout.Where(_ => _.TipoRegistroId == (int)ETipoRegistro.Header)
                                              .OrderBy(_ => _.PosicaoDe)
                                              .ThenBy(_ => _.PosicaoAte)
                                              .ToList();

            var identificadorHeader = layoutValidacaoHeader.Where(_ => _.TipoRegistroFlag.HasValue && _.TipoRegistroFlag.Value).FirstOrDefault();

            //detalhe
            var layoutValidacaoDetalhe = layout.Where(_ => _.TipoRegistroId == (int)ETipoRegistro.Detalhe)
                                               .OrderBy(_ => _.PosicaoDe)
                                               .ThenBy(_ => _.PosicaoAte)
                                               .ToList();

            var identificadorDetalhe = layoutValidacaoDetalhe.Where(_ => _.TipoRegistroFlag.HasValue && _.TipoRegistroFlag.Value).FirstOrDefault();

            //trailer
            var layoutValidacaoTrailer = layout.Where(_ => _.TipoRegistroId == (int)ETipoRegistro.Trailer)
                                               .OrderBy(_ => _.PosicaoDe)
                                               .ThenBy(_ => _.PosicaoAte)
                                               .ToList();

            var identificadorTrailer = layoutValidacaoTrailer.Where(_ => _.TipoRegistroFlag.HasValue && _.TipoRegistroFlag.Value).FirstOrDefault();

            int rowCount = 1;
            //Validando linhas de arquivo
            foreach (var linha in arquivo.LinhasArquivo)
            {
                if (IdentificarLinha(linha, identificadorHeader))
                    logArquivosCriados.AddRange(ValidarLinha(linha, layoutValidacaoHeader, arquivo, rowCount));

                if (IdentificarLinha(linha, identificadorDetalhe))
                    logArquivosCriados.AddRange(ValidarLinha(linha, layoutValidacaoDetalhe, arquivo, rowCount));

                if (IdentificarLinha(linha, identificadorTrailer))
                    logArquivosCriados.AddRange(ValidarLinha(linha, layoutValidacaoTrailer, arquivo, rowCount));

                rowCount++;
            }

            return logArquivosCriados;
        }

        private bool IdentificarLinha(string linha, Layout identificador)
        {
            var valorEncontrado = linha.Substring(identificador.PosicaoDe - 1, identificador.PosicaoAte);
            return valorEncontrado.ToString() == identificador.LayoutValoresEsperados.FirstOrDefault().ValorEsperado.Valor;
        }

        private List<LogArquivo> ValidarLinha(string linha, List<Layout> layoutValidacao, Arquivo arquivo, int rowCount)
        {
            List<LogArquivo> logArquivosCriados = new List<LogArquivo>();
            foreach (var layout in layoutValidacao.Where(_ => !_.TipoRegistroFlag.HasValue || !_.TipoRegistroFlag.Value))
            {
                if (!QtdeCaracteresLinhaValida(linha, layoutValidacao, arquivo, rowCount, logArquivosCriados)) break;
                if (!layout.Obrigatorio) continue;

                //cria novo log de arquivo
                var logArquivo = new LogArquivo(arquivo,
                                                rowCount,
                                                layout.PosicaoDe,
                                                layout.PosicaoAte,
                                                true,
                                                DateTime.Now,
                                                "",
                                                layout.TipoRegistroId,
                                                linha.Length);
                layout.LimparBancos();
                logArquivo.SetarLayout(layout);

                // Busca valores na linha corrente, pela posição do layout
                var valorEncontrado = linha.Substring(layout.PosicaoDe - 1, layout.PosicaoAte - layout.PosicaoDe + 1).Trim();

                bool ehValido = true;
                // validando quando nao possui valor esperado de acordo com tipo
                if (!layout.LayoutValoresEsperados.Any())
                {
                    ehValido = ValidarPorTipo(layout, valorEncontrado, ehValido);
                }
                else
                {
                    // verifica se valor encontrado é valor esperado
                    if (!layout.LayoutValoresEsperados.Any(_ => _.ValorEsperado.Valor == valorEncontrado))
                        ehValido = false;
                }

                logArquivo.SetarEhValido(ehValido);

                if (!ehValido)
                {
                    logArquivo.SetarMensagem(valorEncontrado.ToString());
                    _logArquivoRepository.AdicionarSemFilhos(logArquivo);
                    logArquivosCriados.Add(logArquivo);
                }
            }

            // se linha estiver OK
            if (logArquivosCriados.Count == 0)
            {
                CriaLogPorLinha(true, linha, layoutValidacao, arquivo, rowCount, logArquivosCriados);
            }

            return logArquivosCriados;
        }

        private void CriaLogPorLinha(bool ehValido, string linha, List<Layout> layoutValidacao, Arquivo arquivo, int rowCount, List<LogArquivo> logArquivosCriados)
        {
            var logArquivoLinha = new LogArquivo(arquivo,
                                                    rowCount,
                                                    0,
                                                    linha.Length,
                                                    ehValido,
                                                    DateTime.Now,
                                                    ehValido ? "" : "LINHA",
                                                    layoutValidacao.FirstOrDefault().TipoRegistroId,
                                                    linha.Length);

            logArquivoLinha.SetarLayout(layoutValidacao.FirstOrDefault());
            logArquivosCriados.Add(logArquivoLinha);
            _logArquivoRepository.AdicionarSemFilhos(logArquivoLinha);
        }

        private static bool ValidarPorTipo(Layout layout, string valorEncontrado, bool ehValido)
        {
            //validar pelo tipo
            switch (layout.ETipoCampo)
            {
                case ETipoCampo.Numerico:
                    long val = 0;
                    ehValido = long.TryParse(valorEncontrado, out val);
                    break;

                case ETipoCampo.Alfanumerico:
                    //sempre valido
                    ehValido = true;
                    break;

                case ETipoCampo.DataDDMMAA:
                    string valorDataFormato1 = valorEncontrado.Insert(4, "/");
                    valorDataFormato1 = valorDataFormato1.Insert(2, "/");

                    ehValido = DataHelper.ValidaDataString(valorDataFormato1, "dd/MM/yy");
                    break;

                case ETipoCampo.DataMMDDAA:
                    string valorDataFormato2 = valorEncontrado.Insert(4, "/");
                    valorDataFormato2 = valorDataFormato2.Insert(2, "/");

                    ehValido = DataHelper.ValidaDataString(valorDataFormato2, "MM/dd/yy");
                    break;

                case ETipoCampo.HoraDDMMAAAA:
                    string valorDataFormato3 = valorEncontrado.Insert(4, "/");
                    valorDataFormato3 = valorDataFormato3.Insert(2, "/");

                    ehValido = DataHelper.ValidaDataString(valorDataFormato3, "dd/MM/yyyy");
                    break;
            }

            return ehValido;
        }

        private bool QtdeCaracteresLinhaValida(string linha, List<Layout> layoutValidacao, Arquivo arquivo, int rowCount, List<LogArquivo> logArquivosCriados)
        {
            if ((layoutValidacao.FirstOrDefault().TipoCNABId == (int)ETipoCNAB.CNAB240 && linha.Length != 240)
                || (layoutValidacao.FirstOrDefault().TipoCNABId == (int)ETipoCNAB.CNAB400 && linha.Length != 400))
            {
                CriaLogPorLinha(false, linha, layoutValidacao, arquivo, rowCount, logArquivosCriados);
                return false;
            }
            return true;
        }
    }
}
