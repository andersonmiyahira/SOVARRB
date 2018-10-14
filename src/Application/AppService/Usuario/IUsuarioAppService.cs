using Application.AppService.Base;
using Application.ViewModel.Request;
using Application.ViewModel.Response;
using Domain.Entities;

namespace Application.AppService.ValorEsperado
{
    public interface IUsuarioAppService : IAppServiceBase<Domain.Entities.Usuario>
    {
        UsuarioResponse CadastrarUsuario(UsuarioRequest model);
        UsuarioResponse EfetuarLogin(UsuarioRequest model);
    }
}
