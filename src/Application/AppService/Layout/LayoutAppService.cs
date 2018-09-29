using Application.ViewModel.Filters;
using Application.ViewModel.Response;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Domain.Interfaces.Services;
using System.Collections.Generic;
using System.Linq;

namespace Application.AppService.Layout
{
    public class LayoutAppService : AppServiceBase<Domain.Entities.Layout>, ILayoutAppService
    {
        private readonly ILayoutService _layoutService;
        private readonly IMapper _mapper;

        public LayoutAppService(ILayoutService layoutBase, IMapper mapper) : base(layoutBase)
        {
            _layoutService = layoutBase;
            _mapper = mapper;
        }

        public List<LayoutResponse> ObterPorFiltro(LayoutFilter filter)
        {
            var filters = _mapper.Map<Domain.Entities.Layout>(filter);

            return _layoutService.ObterPorFiltros(filters)
                                 .ProjectTo<LayoutResponse>()
                                 .ToList(); 
                                  
        }
    }
}
