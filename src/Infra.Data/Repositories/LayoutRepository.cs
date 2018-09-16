using Domain.Entities;
using Domain.Interfaces.Repositories;
using Infra.Data.Context;
using Infra.Data.Extensions;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Infra.Data.Repositories
{
    public class LayoutRepository : RepositoryBase<Layout>, ILayoutRepository
    {
        private readonly SOVARRBContext _context;

        public LayoutRepository(SOVARRBContext context) : base(context)
        {
            _context = context;
        }

        public List<Layout> ObterComItens()
        {
            var query = _dbSet.AsNoTracking()
                         .Include(_ => _.Banco)
                         .Include(_ => _.LayoutValoresEsperados)
                            .ThenInclude(_ => _.ValorEsperado);

            var sqlq = query.ToSql();

            return  query.ToList();

            
        }
    }
}
