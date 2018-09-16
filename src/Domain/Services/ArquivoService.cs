using System.Collections.Generic;
using System.Linq;
using Domain.Entities;
using Domain.Enums;
using Domain.Interfaces.Repositories;
using Domain.Interfaces.Services;

namespace Domain.Services
{
    public class ArquivoService : ServiceBase<Arquivo>, IArquivoService
    {
        private readonly IArquivoRepository _arquivoRepository;
        private readonly ILayoutRepository _layoutRepository;

        public ArquivoService(IArquivoRepository arquivoRepository, 
                              ILayoutRepository layoutRepository) : base(arquivoRepository)
        {
            _arquivoRepository = arquivoRepository;
            _layoutRepository = layoutRepository;
        }

        public void ValidarArquivos(List<Arquivo> arquivos)
        {
            var arquivoReferencia = arquivos.FirstOrDefault();
            var layout = _layoutRepository.ObterComItens();

            foreach (var arquivo in arquivos)
            {
                ValidarArquivo(arquivo, layout);
            }   
        }

        private void ValidarArquivo(Arquivo arquivo, List<Layout> layout)
        {
            var layoutValidacaoHeader = layout.Where(_ => _.IdTipoRegistro == (int)ETipoRegistro.Header)
                                              .OrderBy(_ => _.PosicaoDe)
                                              .ThenBy(_ => _.PosicaoAte)
                                              .ToList();

            var layoutValidacaoDetalhe = layout.Where(_ => _.IdTipoRegistro == (int)ETipoRegistro.Detalhe)
                                               .OrderBy(_ => _.PosicaoDe)
                                               .ThenBy(_ => _.PosicaoAte)
                                               .ToList();

            var layoutValidacaoTrailer = layout.Where(_ => _.IdTipoRegistro == (int)ETipoRegistro.Trailer)
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

                ValidarLinha(linha, layoutValidacaoHeader);
            }
        }

        private void ValidarLinha(string linha, List<Layout> layoutValidacao)
        {
            foreach (var layout in layoutValidacao)
            {
                var valorEncontrado = linha.Substring(layout.PosicaoDe, layout.PosicaoAte);
               // var valoresEsperados = layout.ValoresEsperados;
               // if(valoresEsperados != valorEncontrado)
            }
        }
    }
}
