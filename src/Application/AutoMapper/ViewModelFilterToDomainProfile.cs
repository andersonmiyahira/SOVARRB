using Application.ViewModel.Filters;
using Application.ViewModel.Request;
using AutoMapper;
using Domain.Entities;

namespace Application.AutoMapper
{
    public partial class ViewModelFilterToDomainProfile : Profile
    {
        public ViewModelFilterToDomainProfile()
        { 
            // Map Filters
            ValorEsperadoFilter();
            LayoutFilter();
            ArquivoFilter();
            LogArquivoFilter();
        }  
      
        private void ArquivoFilter()
        {
            CreateMap<ArquivoFilter, Arquivo>();
        }

        private void ValorEsperadoFilter()
        {
            CreateMap<ValorEsperadoFilter, Domain.Filters.ValorEsperadoFilter>();
        }

        private void LayoutFilter()
        {
            CreateMap<LayoutFilter, Layout>();
        }

        private void LogArquivoFilter()
        {
            CreateMap<LogArquivoFilter, LogArquivo>()
                .ForMember(x => x.EhValidoFilter, opt => opt.MapFrom(src => src.EhValidoFilter));
        }

    }
}
