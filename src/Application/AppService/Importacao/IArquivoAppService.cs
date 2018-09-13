using Application.AppService.Base;
using Application.ViewModel.Request;
using Domain.Entities;
using System.Collections.Generic;

namespace Application.AppService.Importacao
{
    public interface IArquivoAppService : IAppServiceBase<Arquivo>
    {
        void ProcessarArquivo(List<ArquivoImportacao> arquivosImportados);
    }
}
