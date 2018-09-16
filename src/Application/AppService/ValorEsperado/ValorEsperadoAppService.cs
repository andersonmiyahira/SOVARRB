using Application.ViewModel.Request;
using Application.ViewModel.Response;
using AutoMapper;
using Domain.Interfaces.Services;

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
    }
}
