using Application.ViewModel.Filters;
using Application.ViewModel.Request;
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

        public LayoutResponse ObterPorCodigo(int id)
        {
            return _mapper.Map<LayoutResponse>(_layoutService.ObterPorCodigo(id));
        }

        public LayoutResponse Inserir(LayoutRequest layoutRequest)
        {
            var entity = _mapper.Map<Domain.Entities.Layout>(layoutRequest);

            var ret = _layoutService.Inserir(entity);

            return null;
        }

        public LayoutResponse AtualizarLayout(LayoutRequest layout)
        {
            var entity = _mapper.Map<Domain.Entities.Layout>(layout);
            _layoutService.Alterar(entity);
            return _mapper.Map<LayoutResponse>(entity);
        }

        public void Excluir(int id)
        {
            _layoutService.ExcluirPorCodigo(id);
        }
    }
}
