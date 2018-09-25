using Application.AppService.Base;
using Application.ViewModel.Filters;
using Application.ViewModel.Request;
using Application.ViewModel.Response;
using System.Collections.Generic;

namespace Application.AppService.ValorEsperado
{
    public interface IValorEsperadoAppService : IAppServiceBase<Domain.Entities.ValorEsperado>
    {
        List<ValorEsperadoResponse> ObterPorFiltro(ValorEsperadoFilter filter);
        ValorEsperadoResponse Inserir(ValorEsperadoRequest request);
        ValorEsperadoResponse Alterar(ValorEsperadoRequest request);
        void Excluir(int id);
    }
}
