using Domain.Entities;
using Domain.Interfaces.Repositories;
using Infra.Data.Context;
using System.Linq;

namespace Infra.Data.Repositories
{
    public class UsuarioRepository : RepositoryBase<Usuario>, IUsuarioRepository
    {
        public UsuarioRepository(SOVARRBContext context) : base(context)
        {

        }

        public Usuario VerificarLogin(Usuario entity)
        {
            return _dbSet.Where(_ => _.Ativo)
                         .Where(_ => _.Email == entity.Email)
                         .Where(_ => _.Senha == entity.Senha)
                         .FirstOrDefault();
        }
    }
}
