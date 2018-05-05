using Domain.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.AppService.Banco
{
    public class BancoAppService : AppServiceBase<Domain.Entities.Banco>, IBancoAppService 
    {
        private readonly IBancoService _bancoService;

        public BancoAppService(IBancoService bancoService)
            : base(bancoService)
        {
            _bancoService = bancoService;
        }
    }
}
