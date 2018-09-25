using Domain.Entities;
using Domain.Interfaces.Repositories;
using Infra.Data.Context;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Infra.Data.Repositories
{
    public class ValorEsperadoRepository : RepositoryBase<ValorEsperado>, IValorEsperadoRepository
    {
        public ValorEsperadoRepository(SOVARRBContext context) : base(context)
        {

        }

        public ValorEsperado ObterPorCodigo(int id)
        {
            return _dbSet.AsNoTracking().FirstOrDefault(_ => _.IdValorEsperado == id);
        }

        public IQueryable<ValorEsperado> ObterPorFiltros(ValorEsperado filters)
        {
            return _dbSet.Include(_ => _.Banco)
                         .Where(_ => filters.BancoId == default(int) || _.BancoId == filters.BancoId);
        }
    }
}
