using Domain.Entities;
using Domain.Interfaces.Repositories;
using Infra.Data.Context;

namespace Infra.Data.Repositories
{
    public class TipoCNABRepository : RepositoryBase<TipoCNAB>, ITipoCNABRepository
    {
        public TipoCNABRepository(SOVARRBContext context) : base(context)
        {
        }
    }
}
