using Application.Helpers;
using Application.ViewModel;
using Application.ViewModel.Request;
using Domain.Interfaces.Services;

namespace Application.AppService.Banco
{
    public class ArquivoAppService : AppServiceBase<Domain.Entities.Arquivo>, IArquivoAppService 
    {
        private readonly IArquivoService _arquivoService;

        public ArquivoAppService(IArquivoService arquivoService) 
            : base(arquivoService)
        {
            _arquivoService = arquivoService;
        }

        public void ProcessarArquivo(ImportarRequest importarRequest)
        {
            foreach (var importacao in importarRequest.ArquivoImportacao)
            {
                var linhas = TextoHelper.ObterLinhasDoArquivo(importacao.ArquivoStream);
            }
        }
    }
}
