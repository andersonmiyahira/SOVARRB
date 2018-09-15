using System;
using System.Collections.Generic;
using System.Text;
using Application.AppService.Banco;
using Application.AppService.Segmento;
using Application.AppService.TipoCNAB;
using Application.AppService.ValorEsperado;
using AutoMapper;
using Domain.Interfaces.Repositories;
using Domain.Interfaces.Services;
using Domain.Interfaces.Uow;
using Domain.Services;
using Infra.Data.Context;
using Infra.Data.Repositories;
using Infra.Data.UoW;
using Microsoft.Extensions.DependencyInjection;

namespace CrossCutting
{
    public class NativeInjector
    {
        public static void RegisterServices(IServiceCollection services)
        {
            // Register - Services APP
            RegisterAppServices(services);

            // Register - Services Domain
            RegisterDomainServices(services);

            //Register - Repositories
            RegisterRepositories(services);
            
            //Register  - Infra
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped<SOVARRBContext>(); 
        }

        private static void RegisterAppServices(IServiceCollection services)
        {
            services.AddScoped<IArquivoAppService, ArquivoAppService>();
            services.AddScoped<IBancoAppService, BancoAppService>();
            services.AddScoped<ILayoutAppService, LayoutAppService>();
            services.AddScoped<ISegmentoAppService, SegmentoAppService>();
            services.AddScoped<ITipoCNABAppService, TipoCNABAppService>();            
            services.AddScoped<IValorEsperadoAppService, ValorEsperadoAppService>();            
        }

        private static void RegisterDomainServices(IServiceCollection services)
        {
            services.AddScoped<IArquivoService, ArquivoService>();
            services.AddScoped<IBancoService, BancoService>();
            services.AddScoped<ILayoutService, LayoutService>();
            services.AddScoped<ITipoCNABService, TipoCNABService>();
            services.AddScoped<ISegmentoService, SegmentoService>();
            services.AddScoped<IValorEsperadoService, ValorEsperadoService>();            
        }

        private static void RegisterRepositories(IServiceCollection services)
        {
            services.AddScoped<IArquivoRepository, ArquivoRepository>();
            services.AddScoped<IBancoRepository, BancoRepository>();
            services.AddScoped<ILayoutRepository, LayoutRepository>();
            services.AddScoped<ITipoCNABRepository, TipoCNABRepository>();
            services.AddScoped<ISegmentoRepository, SegmentoRepository>();
            services.AddScoped<IValorEsperadoRepository, ValorEsperadoRepository>();            
        }
    }
}
