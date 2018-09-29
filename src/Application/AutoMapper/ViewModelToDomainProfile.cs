using Application.ViewModel.Filters;
using Application.ViewModel.Request;
using AutoMapper;
using Domain.Entities;

namespace Application.AutoMapper
{
    public class ViewModelToDomainProfile : Profile
    {
        public ViewModelToDomainProfile()
        {
            Banco();
            Segmento();
            ValorEsperado();

            // Map Filters
            ValorEsperadoFilter();
            LayoutFilter();
        }

        private void Arquivo()
        {
            //CreateMap<ImportarRequest, List<Arquivo>>()
            //        .ForMember(x => x.Add, opt => opt.MapFrom(src => src.));
        }

        private void Banco()
        {
            CreateMap<BancoRequest, Banco>();
        }

        private void Segmento()
        {
            CreateMap<SegmentoRequest, Segmento>();
        }

        private void ValorEsperado()
        {
            CreateMap<ValorEsperadoRequest, ValorEsperado>();
        }

        private void ValorEsperadoFilter()
        {
            CreateMap<ValorEsperadoFilter, ValorEsperado>();
        }

        private void LayoutFilter()
        {
            CreateMap<LayoutFilter, Layout>();
        }
    }
}
