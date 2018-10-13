using System.Linq;
using Domain.Entities;

namespace Domain.Interfaces.Repositories
{
    public interface ILogArquivoRepository : IRepositoryBase<LogArquivo>
    {
        IQueryable<LogArquivo> ObterPorFiltro(LogArquivo filters);
        LogArquivo ObterPorCodigo(int id);
    }
}
