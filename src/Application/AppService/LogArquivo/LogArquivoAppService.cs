using Application.ViewModel.Filters;
using Application.ViewModel.Request;
using Application.ViewModel.Response;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Domain.Interfaces.Services;
using System.Collections.Generic;
using System.Linq;

namespace Application.AppService.LogArquivo
{
    public class LogArquivoAppService : AppServiceBase<Domain.Entities.LogArquivo>, ILogArquivoAppService
    {
        private readonly ILogArquivoService _logArquivoService;
        private readonly IMapper _mapper;

        public LogArquivoAppService(ILogArquivoService logArquivo, IMapper mapper) : base(logArquivo)
        {
            _logArquivoService = logArquivo;
            _mapper = mapper;
        }

        public List<LogArquivoResponse> ObterPorFiltro(LogArquivoFilter filter)
        {
            var filters = _mapper.Map<Domain.Entities.LogArquivo>(filter);
            var response = _logArquivoService.ObterPorFiltro(filters)
                                     .ProjectTo<LogArquivoResponse>()
                                     .ToList();
            return response;
        }

        public LogArquivoResponse ObterPorCodigo(int id)
        {
            return _mapper.Map<LogArquivoResponse>(_logArquivoService.ObterPorCodigo(id));
        } 
    }
}
