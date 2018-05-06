using Domain.Entities;
using Domain.Interfaces.Repositories;
using Domain.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Services
{
    public class BancoService : ServiceBase<Banco>, IBancoService
    {
        private readonly IBancoRepository _bancoRepository;

        public BancoService(IBancoRepository bancoRepository) : base(bancoRepository)
        {
            this._bancoRepository = bancoRepository;
        }
    }
}
