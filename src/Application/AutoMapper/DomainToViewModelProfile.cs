using Application.ViewModel.Response;
using AutoMapper;
using Domain.Entities;
using Domain.Enums;
using Domain.Extensions;
using System;

namespace Application.AutoMapper
{
    public class DomainToViewModelProfile : Profile
    {
        public DomainToViewModelProfile()
        {
            ValorEsperado();
            Layout();
            Arquivo();
        }

        private void ValorEsperado()
        {

            CreateMap<ValorEsperado, ValorEsperadoResponse>()
               .ForMember(x => x.CNABDescricao, opt => opt.MapFrom(src => ((ETipoCNAB)Enum.ToObject(typeof(ETipoCNAB), src.TipoCNABId)).GetDescription()))
               .ForMember(x => x.TipoBoletoDescricao, opt => opt.MapFrom(src => ((ETipoBoleto)Enum.ToObject(typeof(ETipoBoleto), src.TipoBoletoId)).GetDescription()));
        }

        private void Layout()
        {

            CreateMap<Layout, LayoutResponse>()
               .ForMember(x => x.TipoCampoDescricao, opt => opt.MapFrom(src => ((ETipoCampo)Enum.ToObject(typeof(ETipoCampo), src.TipoCampoId)).GetDescription()))
               .ForMember(x => x.ValoresEsperados, opt => opt.MapFrom(src => src.LayoutValoresEsperados));
        }  

        private void Arquivo()
        {
            CreateMap<Arquivo, ArquivoResponse>()
             .ForMember(x => x.TipoBoletoDescricao, opt => opt.MapFrom(src => ((ETipoBoleto)Enum.ToObject(typeof(ETipoBoleto), src.TipoBoletoId)).GetDescription()))
             .ForMember(x => x.TipoCNABDescricao, opt => opt.MapFrom(src => ((ETipoCNAB)Enum.ToObject(typeof(ETipoCNAB), src.TipoCNABId)).GetDescription()));
        }
    }
}
