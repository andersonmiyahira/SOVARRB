using Domain.Entities;
using Domain.Interfaces.Repositories;
using Infra.Data.Context;
using System;
using System.Linq;

namespace Infra.Data.Repositories
{
    public class ArquivoRepository : RepositoryBase<Arquivo>, IArquivoRepository
    {
        public ArquivoRepository(SOVARRBContext context) : base(context)
        {
        }

        public IQueryable<Arquivo> ObterComFiltros(Arquivo filters, DateTime de, DateTime ate)
        {
            return _dbSet.Where(_ => _.BancoId == filters.BancoId)
                         .Where(_ => _.TipoCNABId == filters.TipoCNABId)
                         .Where(_ => _.TipoBoletoId == filters.TipoBoletoId)
                         .Where(_ => _.UsuarioId == filters.UsuarioId)
                         .Where(_ => de == DateTime.MinValue || _.DataCadastro >= de)
                         .Where(_ => ate == DateTime.MinValue || _.DataCadastro <= ate);
        }
    }
}
