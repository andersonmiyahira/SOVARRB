using System;
using System.Collections.Generic;
using System.Text;
using Application.ViewModel.Request;
using Application.ViewModel.Response;
using AutoMapper;
using Domain.Entities;
using Domain.Interfaces.Services;

namespace Application.AppService.Segmento
{
    public class SegmentoAppService : AppServiceBase<Domain.Entities.Segmento>, ISegmentoAppService
    {
        private readonly ISegmentoService _segmentoService;
        private readonly IMapper _mapper;

        public SegmentoAppService(ISegmentoService segmentoService,
                                  IMapper mapper) : base(segmentoService)
        {
            _segmentoService = segmentoService;
            _mapper = mapper;
        }

        public SegmentoResponse Inserir(SegmentoRequest request)
        {
            var input = _mapper.Map<Domain.Entities.Segmento>(request);
            var response = _segmentoService.Inserir(input);

            return _mapper.Map<SegmentoResponse>(response);
        }

        public SegmentoResponse Alterar(SegmentoRequest request)
        {
            var input = _mapper.Map<Domain.Entities.Segmento>(request);
            var response =_segmentoService.Alterar(input);

            return _mapper.Map<SegmentoResponse>(response);
        }

        public void Excluir(SegmentoRequest request)
        {
            var input = _mapper.Map<Domain.Entities.Segmento>(request);
            _segmentoService.Excluir(input);
        }
    }
}
