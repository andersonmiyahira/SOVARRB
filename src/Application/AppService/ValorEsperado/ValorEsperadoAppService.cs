using Application.ViewModel.Filters;
using Application.ViewModel.Request;
using Application.ViewModel.Response;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Domain.Interfaces.Services;
using System.Collections.Generic;
using System.Linq;

namespace Application.AppService.ValorEsperado
{
    public class ValorEsperadoAppService : AppServiceBase<Domain.Entities.ValorEsperado>, IValorEsperadoAppService
    {
        private readonly IValorEsperadoService _valorEsperadoService;
        private readonly IMapper _mapper;

        public ValorEsperadoAppService(IValorEsperadoService valorEsperadoService, IMapper mapper) : base(valorEsperadoService)
        {
            _valorEsperadoService = valorEsperadoService;
            _mapper = mapper;
        }

        public ValorEsperadoResponse Alterar(ValorEsperadoRequest request)
        {
            var entity = _mapper.Map<Domain.Entities.ValorEsperado>(request);
            return _mapper.Map<ValorEsperadoResponse>(_valorEsperadoService.Alterar(entity));
        }

        public void Excluir(ValorEsperadoRequest request)
        {
            var entity = _mapper.Map<Domain.Entities.ValorEsperado>(request);
            _valorEsperadoService.Excluir(entity);
        }

        public ValorEsperadoResponse Inserir(ValorEsperadoRequest request)
        {
            var entity = _mapper.Map<Domain.Entities.ValorEsperado>(request);
            return _mapper.Map<ValorEsperadoResponse>(_valorEsperadoService.Inserir(entity));
        }

        public List<ValorEsperadoResponse> ObterPorFiltro(ValorEsperadoFilter filter)
        {
            var filters = _mapper.Map<Domain.Entities.ValorEsperado>(filter);
            //return _mapper.Map<ValorEsperadoResponse>(_valorEsperadoService.ObterPorFiltros(filters));

            return _valorEsperadoService.ObterPorFiltros(filters).ProjectTo<ValorEsperadoResponse>().ToList();
        }
    }
}
