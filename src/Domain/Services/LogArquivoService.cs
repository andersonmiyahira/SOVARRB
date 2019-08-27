using System.Collections.Generic;
using System.Linq;
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

        public LogArquivo ObterPorCodigo(int id)
        {
            return _logArquivoRepository.ObterPorCodigo(id);
        }

        public IQueryable<LogArquivo> ObterPorFiltro(LogArquivo filters)
        {
            return _logArquivoRepository.ObterPorFiltro(filters);
        }

        public List<LogArquivo> ObterResultados(int arquivoId)
        {
            var response = _logArquivoRepository.ObterResultado(arquivoId)
                                                .ToList();
            return response;
        }
    }
}
