using Domain.Entities;
using Domain.Interfaces.Repositories;
using Infra.Data.Context;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Infra.Data.Repositories
{
    public class SegmentoRepository : RepositoryBase<Segmento>, ISegmentoRepository
    {
        public SegmentoRepository(SOVARRBContext context) : base(context)
        {
        }

        public override IEnumerable<Segmento> GetAll()
        {
            return _dbSet.Include(_ => _.Banco);
        }

        public Segmento ObterPorCodigo(int id)
        {
            return _dbSet.AsNoTracking()
                         .FirstOrDefault(_ => _.IdSegmento == id);
        }
    }
}
