using Application.AppService.Base;
using Application.ViewModel.Filters;
using Application.ViewModel.Request;
using Application.ViewModel.Response;
using System.Collections.Generic;

namespace Application.AppService.Banco
{
    public interface IArquivoAppService : IAppServiceBase<Domain.Entities.Arquivo>
    {
        void ProcessarArquivo(ImportarRequest importarRequest);
        List<ArquivoResponse> ObterComFiltros(ArquivoFilter arquivoFilter);
        byte[] Download(int id);
    }
}
