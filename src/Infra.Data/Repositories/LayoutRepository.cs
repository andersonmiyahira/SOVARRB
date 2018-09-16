using Domain.Entities;
using Domain.Interfaces.Repositories;
using Infra.Data.Context;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Infra.Data.Repositories
{
    public class LayoutRepository : RepositoryBase<Layout>, ILayoutRepository
    {
        public LayoutRepository(SOVARRBContext context) : base(context)
        {
        }

        public List<Layout> ObterComItens()
        {
            var query = _dbSet.AsNoTracking()
                         .Include(_ => _.Banco)
                         .Include(_ => _.LayoutValoresEsperados)
                            .ThenInclude(_ => _.ValorEsperado);

            return  query.ToList();            
        }
    }
}
