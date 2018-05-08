using Domain.Entities;
using Domain.Interfaces.Repositories;
using Domain.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Services
{
    public class TipoCNABService : ServiceBase<TipoCNAB>, ITipoCNABService
    {
        private readonly ITipoCNABRepository _tipoCNABRepository;

        public TipoCNABService(ITipoCNABRepository tipoCNABRepository) : base(tipoCNABRepository)
        {
            this._tipoCNABRepository = tipoCNABRepository;
        }
    }
}
