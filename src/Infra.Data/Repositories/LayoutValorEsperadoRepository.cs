using Domain.Entities;
using Domain.Interfaces.Repositories;
using Infra.Data.Context;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Infra.Data.Repositories
{
    public class LayoutValorEsperadoRepository : RepositoryBase<LayoutValorEsperado>, ILayoutValorEsperadoRepository
    {
        public LayoutValorEsperadoRepository(SOVARRBContext context) : base(context)
        {
        }

        public List<LayoutValorEsperado> ObterPorCodigoLayout(int IdLayout)
        {
            return _dbSet.AsNoTracking()
                         .Where(_ => _.LayoutId == IdLayout)
                         .ToList();
        }
    }
}
