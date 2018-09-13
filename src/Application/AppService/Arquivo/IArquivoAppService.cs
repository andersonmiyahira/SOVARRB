using Application.AppService.Base;
using Application.ViewModel.Request;
using System.Collections.Generic;

namespace Application.AppService.Banco
{
    public interface IArquivoAppService : IAppServiceBase<Domain.Entities.Arquivo>
    {
        void ProcessarArquivo(ImportarRequest importarRequest);
    }
}
