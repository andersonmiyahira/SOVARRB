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

        public void AdicionarSemFilhos(LogArquivo model)
        {
            //if (model.Arquivo != null)
            //    _context.Entry(model.Arquivo).State = EntityState.Modified;

            if(model.Layout != null)
                _context.Entry(model.Layout).State = EntityState.Modified;

            _context.Entry(model).State = EntityState.Added;
            _context.Set<LogArquivo>().Add(model);
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
                         .Where(_ => !filters.EhValidoFilter.HasValue || _.EhValido == filters.EhValidoFilter)
                         .Where(_ => filters.ArquivoId == 0 || _.ArquivoId == filters.ArquivoId);
        }

        public IQueryable<LogArquivo> ObterResultado(int arquivoId)
        {
            return _dbSet.Include(_ => _.Arquivo)
                         .Include(_ => _.Layout)
                            .ThenInclude(_ => _.LayoutValoresEsperados)
                                .ThenInclude(_ => _.ValorEsperado)
                         .Where(_ =>_.ArquivoId == arquivoId)
                         .OrderBy(_ => _.Layout.TipoRegistroId)
                         .ThenBy(_ => _.Linha)
                         .ThenBy(_ => _.PosicaoDe);
        }

    }
}
