using System.Linq;
using Domain.Entities;

namespace Domain.Interfaces.Repositories
{
    public interface ILogArquivoRepository : IRepositoryBase<LogArquivo>
    {
        IQueryable<LogArquivo> ObterPorFiltro(LogArquivo filters);
        IQueryable<LogArquivo> ObterResultado(int arquivoId);
        LogArquivo ObterPorCodigo(int id);
        void AdicionarSemFilhos(LogArquivo model);
    }
}
