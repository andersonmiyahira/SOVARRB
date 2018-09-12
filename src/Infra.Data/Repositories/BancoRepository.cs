using Domain.Entities;
using Domain.Interfaces.Repositories;
using Infra.Data.Context;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Infra.Data.Repositories
{
    public class BancoRepository : RepositoryBase<Banco>, IBancoRepository
    {
        public BancoRepository(SOVARRBContext context) : base(context)
        {
        }

        public Banco ObterPorCodigo(int id)
        {
            return _dbSet.AsNoTracking().FirstOrDefault(_ => _.Id == id);
        }
    }
}
