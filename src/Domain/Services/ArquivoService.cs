using Domain.Entities;
using Domain.Enums;
using Domain.Interfaces.Repositories;
using Domain.Interfaces.Services;
using Domain.Interfaces.Uow;
using System;
using System.Collections.Generic;
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

        public void ValidarArquivos(List<Arquivo> arquivos)
        {
            var arquivoReferencia = arquivos.FirstOrDefault();

            var layout = _layoutRepository.ObterComItens(arquivoReferencia)
                                          .ToList();

            foreach (var arquivo in arquivos)
            {
                ValidarArquivo(arquivo, layout);
            }   
        }

        private void ValidarArquivo(Arquivo arquivo, List<Layout> layout)
        {
            var layoutValidacaoHeader = layout.Where(_ => _.TipoRegistroId == (int)ETipoRegistro.Header)
                                              .OrderBy(_ => _.PosicaoDe)
                                              .ThenBy(_ => _.PosicaoAte)
                                              .ToList();

            var layoutValidacaoDetalhe = layout.Where(_ => _.TipoRegistroId == (int)ETipoRegistro.Detalhe)
                                               .OrderBy(_ => _.PosicaoDe)
                                               .ThenBy(_ => _.PosicaoAte)
                                               .ToList();

            var layoutValidacaoTrailer = layout.Where(_ => _.TipoRegistroId == (int)ETipoRegistro.Trailer)
                                               .OrderBy(_ => _.PosicaoDe)
                                               .ThenBy(_ => _.PosicaoAte)
                                               .ToList();

            foreach (var linha in arquivo.LinhasArquivo)
            {
                // if(linha.tipo == header)
                //ValidarLinha(linha, layoutValidacaoHeader);

                // if(linha.tipo == detealhe)
                //ValidarLinha(linha, layoutValidacaoDetalhe);

                // if(linha.tipo == trailer)
                //ValidarLinha(linha, layoutValidacaoTrailer);

                ValidarLinha(linha, layoutValidacaoDetalhe);
            }
        }

        private void ValidarLinha(string linha, List<Layout> layoutValidacao)
        {
            foreach (var layout in layoutValidacao)
            {
                // Busca valores na linha corrente, pela posição do layout
                var valorEncontrado = linha.Substring(layout.PosicaoDe, layout.PosicaoAte);

                //verifica se valor encontrado é valor esperado
                //if (!layout.LayoutValoresEsperados.Any(_ => _.ValorEsperado.Valor == valorEncontrado))
                //{
                //    _logArquivoRepository.Add(new LogArquivo(
                //                                               0,
                //                                               0,
                //                                               layout.PosicaoDe,
                //                                               layout.PosicaoAte,
                //                                               false,
                //                                               DateTime.Now,
                //                                               "Valor Encontrado é diferente do esperado",
                //                                               3//detalhe
                //                            ));
                //}   
            }
        }
    }
}
