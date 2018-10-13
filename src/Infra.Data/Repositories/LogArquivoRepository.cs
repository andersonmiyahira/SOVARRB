using System.Linq;
using Domain.Entities;
using Domain.Interfaces.Repositories;
using Infra.Data.Context;
using Microsoft.EntityFrameworkCore;

namespace Infra.Data.Repositories
{
    public class LogArquivoRepository : RepositoryBase<LogArquivo>, ILogArquivoRepository
    {
        public LogArquivoRepository(SOVARRBContext context) : base(context)
        {

        }

        public LogArquivo ObterPorCodigo(int id)
        {
            return _dbSet.AsNoTracking()
                         .Include(_ => _.Arquivo)
                         .Include(_ => _.Layout)
                         .FirstOrDefault(_ => _.IdLogArquivo == id);
        }

        public IQueryable<LogArquivo> ObterPorFiltro(LogArquivo filters)
        {
            return _dbSet.Include(_ => _.Arquivo)
                         .Include(_ => _.Layout)
                         .Where(_ => !filters.EhValidoFilter.HasValue || _.EhValido == filters.EhValidoFilter);
        }
    }
}
