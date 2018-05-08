using Domain.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.AppService.TipoCNAB
{
    public class TipoCNABAppService : AppServiceBase<Domain.Entities.TipoCNAB>, ITipoCNABAppService 
    {
        private readonly ITipoCNABService _tipoCNABService;

        public TipoCNABAppService(ITipoCNABService tipoCNABService)
            : base(tipoCNABService)
        {
            _tipoCNABService = tipoCNABService;
        }
    }
}
