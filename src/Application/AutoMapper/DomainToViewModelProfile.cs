using System;
using Application.ViewModel.Response;
using AutoMapper;
using Domain.Entities;
using Domain.Enums;
using Domain.Extensions;

namespace Application.AutoMapper
{
    public class DomainToViewModelProfile : Profile
    {
        public DomainToViewModelProfile()
        {
            ValorEsperado();
            Layout();
        }

        private void ValorEsperado()
        {

            CreateMap<ValorEsperado, ValorEsperadoResponse>()
               .ForMember(x => x.CNABDescricao, opt => opt.MapFrom(src => ((ETipoCNAB)src.TipoCNABId).ToString()))
               .ForMember(x => x.TipoBoletoDescricao, opt => opt.MapFrom(src => ((ETipoBoleto)src.TipoBoletoId).ToString()));
        }

        private void Layout()
        {

            CreateMap<Layout, LayoutResponse>()
               .ForMember(x => x.TipoCampoDescricao, opt => opt.MapFrom(src => ((ETipoCampo)Enum.ToObject(typeof(ETipoCampo), src.TipoCampoId)).GetDescription() ));
        } 
    }
}
