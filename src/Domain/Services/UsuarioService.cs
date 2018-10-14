using Domain.Entities;
using Domain.Interfaces.Repositories;
using Domain.Interfaces.Services;
using Domain.Interfaces.Uow;

namespace Domain.Services
{
    public class UsuarioService : ServiceBase<Usuario>, IUsuarioService
    {
        private readonly IUsuarioRepository _usuarioRepository;
        private readonly IUnitOfWork _uow;

        public UsuarioService(IUsuarioRepository usuarioRepository, IUnitOfWork uow) : base(usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
            _uow = uow;
        }

        public Usuario EfetuarLogin(Usuario entity)
        {
            return _usuarioRepository.VerificarLogin(entity);
        }

        public Usuario SalvarUsuario(Usuario entity)
        {
            _usuarioRepository.Add(entity);
            _uow.Commit();

            return entity;
        }
    }
}
