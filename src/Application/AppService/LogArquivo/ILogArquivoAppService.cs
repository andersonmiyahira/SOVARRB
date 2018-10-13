using Application.AppService.Base;
using Application.ViewModel.Filters;
using Application.ViewModel.Response;
using System.Collections.Generic;

namespace Application.AppService.LogArquivo
{
    public interface ILogArquivoAppService : IAppServiceBase<Domain.Entities.LogArquivo>
    {
        List<LogArquivoResponse> ObterPorFiltro(LogArquivoFilter filter);
        LogArquivoResponse ObterPorCodigo(int id);
    }
}
