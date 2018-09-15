using Domain.Entities;
using Domain.Interfaces.Repositories;
using Infra.Data.Context;

namespace Infra.Data.Repositories
{
    public class LogArquivoRepository : RepositoryBase<LogArquivo>, ILogArquivoRepository
    {
        public LogArquivoRepository(SOVARRBContext context) : base(context)
        {

        }
    }
}
