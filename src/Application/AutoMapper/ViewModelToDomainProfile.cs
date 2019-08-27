using Application.ViewModel.Filters;
using Application.ViewModel.Request;
using AutoMapper;
using Domain.Entities;
using System;

namespace Application.AutoMapper
{
    public class ViewModelToDomainProfile : Profile
    {
        public ViewModelToDomainProfile()
        {
            Banco();
            Segmento();
            ValorEsperado();
            Layout();
            Usuario();
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

        private void Layout()
        {
            CreateMap<LayoutRequest, Layout>();
        }

        private void Usuario()
        {
            // create default user
            CreateMap<UsuarioRequest, Usuario>()                
                .ForMember(x => x.EhAdministrador, opt => opt.MapFrom(src => false))
                .ForMember(x => x.DataAlteracao, opt => opt.MapFrom(src => DateTime.Now))
                .ForMember(x => x.DataCadastro, opt => opt.MapFrom(src => DateTime.Now))
                .ForMember(x => x.Ativo, opt => opt.MapFrom(src => true)); 
        }
    }
}
