using Domain.Entities;

namespace Domain.Interfaces.Services
{
    public interface IUsuarioService : IServiceBase<Usuario>
    {
        Usuario SalvarUsuario(Usuario entity);
    }
}
