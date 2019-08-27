using Domain.Entities;
using Domain.Filters;
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

        public IQueryable<ValorEsperado> ObterPorFiltros(ValorEsperadoFilter filters)
        {
            return _dbSet.Include(_ => _.Banco)
                         .Include(_ => _.LayoutValoresEsperados)
                            .ThenInclude(_ => _.Layout)
                         .Where(_ => filters.bancoId == default(int) || _.BancoId == filters.bancoId)
                         .Where(_ => filters.tipoBoletoId == default(int) || _.TipoBoletoId == filters.tipoBoletoId)
                         .Where(_ => filters.tipoCNABId == default(int) || _.TipoCNABId == filters.tipoCNABId)
                         .Where(_ => filters.tipoRegistroId == default(int) 
                                    || _.LayoutValoresEsperados.Any(__ => __.Layout.TipoRegistroId == filters.tipoRegistroId));
        }
    }
}
