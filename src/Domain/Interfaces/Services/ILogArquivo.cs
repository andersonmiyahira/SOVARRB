using Domain.Entities;
using System.Collections.Generic;
using System.Linq;

namespace Domain.Interfaces.Services
{
    public interface ILogArquivoService : IServiceBase<LogArquivo>
    {
        IQueryable<LogArquivo> ObterPorFiltro(LogArquivo filters);
        LogArquivo ObterPorCodigo(int id);
    }
}
