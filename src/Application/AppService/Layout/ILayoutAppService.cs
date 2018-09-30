using Application.AppService.Base;
using Application.ViewModel.Filters;
using Application.ViewModel.Request;
using Application.ViewModel.Response;
using System.Collections.Generic;

namespace Application.AppService.Layout
{
    public interface ILayoutAppService : IAppServiceBase<Domain.Entities.Layout>
    {
        List<LayoutResponse> ObterPorFiltro(LayoutFilter filter);
        LayoutResponse AtualizarLayout(LayoutRequest layout);
        LayoutResponse ObterPorCodigo(int id);
        void Excluir(int id);
    }
}
