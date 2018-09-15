using Domain.Entities;
using Domain.Interfaces.Repositories;
using Domain.Interfaces.Services;

namespace Domain.Services
{
    public class LogArquivoService : ServiceBase<LogArquivo>, ILogArquivoService
    {
        private readonly ILogArquivoRepository _logArquivoRepository;

        public LogArquivoService(ILogArquivoRepository logArquivoRepository) : base(logArquivoRepository)
        {
            this._logArquivoRepository = logArquivoRepository;
        }
         
    }
}
