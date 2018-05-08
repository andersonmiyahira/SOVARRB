using System;
using System.Collections.Generic;
using System.Text;
using Application.AppService.Banco;
using Application.AppService.TipoCNAB;
using Domain.Interfaces.Repositories;
using Infra.Data.Context;
using Infra.Data.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace CrossCutting
{
    public class NativeInjector
    {
        public static void RegisterServices(IServiceCollection services)
        { 
            // Application
            //services.AddSingleton(Mapper.Configuration);
            //services.AddScoped<IMapper>(sp => new Mapper(sp.GetRequiredService<IConfigurationProvider>(), sp.GetService));

            // Register - Services
            RegisterAppService(services);
            
            //Register  - Infra
            //services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped<SOVARRBContext>(); 
        }

        private static void RegisterAppService(IServiceCollection services)
        {
            services.AddScoped<IBancoAppService, BancoAppService>();
            services.AddScoped<Domain.Interfaces.Services.IBancoService, Domain.Services.BancoService>();
            services.AddScoped<IBancoRepository, BancoRepository>();

            services.AddScoped<ITipoCNABAppService, TipoCNABAppService>();
            services.AddScoped<Domain.Interfaces.Services.ITipoCNABService, Domain.Services.TipoCNABService>();
            services.AddScoped<ITipoCNABRepository, TipoCNABRepository>();
        } 
    }
}
