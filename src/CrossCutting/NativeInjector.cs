using System;
using System.Collections.Generic;
using System.Text;
using Application.AppService.Banco;
using Application.AppService.Importacao;
using Application.AppService.TipoCNAB;
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
            services.AddScoped<IBancoAppService, BancoAppService>();
            services.AddScoped<ITipoCNABAppService, TipoCNABAppService>();
            services.AddScoped<IArquivoAppService, ArquivoAppService>();
        }

        private static void RegisterDomainServices(IServiceCollection services)
        {
            services.AddScoped<IBancoService, BancoService>();
            services.AddScoped<ITipoCNABService, TipoCNABService>();
            services.AddScoped<IArquivoService, ArquivoService>();
        }

        private static void RegisterRepositories(IServiceCollection services)
        {
            services.AddScoped<IBancoRepository, BancoRepository>();
            services.AddScoped<ITipoCNABRepository, TipoCNABRepository>();
            services.AddScoped<IArquivoRepository, ArquivoRepository>();
        }
    }
}
