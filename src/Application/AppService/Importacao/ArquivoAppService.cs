using System.Collections.Generic;
using Application.ViewModel.Request;
using Domain.Entities;
using Domain.Interfaces.Services;

namespace Application.AppService.Importacao
{
    public class ArquivoAppService : AppServiceBase<Arquivo>, IArquivoAppService
    {
        private readonly IArquivoService _arquivoService;

        public ArquivoAppService(IArquivoService arquivoService): base(arquivoService)
        {
            _arquivoService = arquivoService;
        }

        public void ProcessarArquivo(List<ArquivoImportacao> arquivosImportados)
        {
            
        }
    }
}
