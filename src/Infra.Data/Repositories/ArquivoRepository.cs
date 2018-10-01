using Domain.Entities;
using Domain.Interfaces.Repositories;
using Infra.Data.Context;
using Microsoft.EntityFrameworkCore;
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
            return _dbSet
                         .Include(_ => _.Banco)
                         .Where(_ => filters.BancoId == default(int)      || _.BancoId == filters.BancoId)
                         .Where(_ => filters.TipoCNABId == default(int)   || _.TipoCNABId == filters.TipoCNABId)
                         .Where(_ => filters.TipoBoletoId == default(int) || _.TipoBoletoId == filters.TipoBoletoId)
                         .Where(_ => filters.UsuarioId == default(int)    || _.UsuarioId == filters.UsuarioId)
                         .Where(_ => de == DateTime.MinValue              || _.DataCadastro >= de)
                         .Where(_ => ate == DateTime.MinValue             || _.DataCadastro <= ate);
        }
    }
}
