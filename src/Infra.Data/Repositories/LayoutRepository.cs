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

        public IQueryable<Layout> ObterComItens(Arquivo filters)
        {
            var query = _dbSet.AsNoTracking()
                                  .Include(_ => _.Banco)
                                  .Include(_ => _.LayoutValoresEsperados)
                                    .ThenInclude(_ => _.ValorEsperado)
                              .Where(_ => _.BancoId != default(int) || _.BancoId == filters.BancoId)
                              .Where(_ => _.TipoCNABId != default(int) || _.TipoCNABId == filters.TipoCNABId)
                              .Where(_ => _.TipoBoletoId != default(int) || _.TipoBoletoId == filters.TipoBoletoId);

            return query;            
        }

        public Layout ObterPorCodigo(int id)
        {
            return _dbSet.AsNoTracking()
                         .Include(_ => _.Banco)
                         .Include(_ => _.LayoutValoresEsperados)
                            .ThenInclude(_ => _.ValorEsperado)
                         .FirstOrDefault(_ => _.IdLayout == id); 
        }
    }
}
