using Application.AppService.Base;
using Application.ViewModel.Request;
using Application.ViewModel.Response;

namespace Application.AppService.ValorEsperado
{
    public interface IValorEsperadoAppService : IAppServiceBase<Domain.Entities.ValorEsperado>
    {
        ValorEsperadoResponse Inserir(ValorEsperadoRequest request);
        ValorEsperadoResponse Alterar(ValorEsperadoRequest request);
        void Excluir(ValorEsperadoRequest request);
    }
}
