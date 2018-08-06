using Application.ViewModel;
using AutoMapper;
using Domain.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.AppService.Banco
{
    public class BancoAppService : AppServiceBase<Domain.Entities.Banco>, IBancoAppService 
    {
        private readonly IBancoService _bancoService;
        private readonly IMapper _mapper;

        public BancoAppService(IBancoService bancoService, IMapper mapper)
            : base(bancoService)
        {
            _bancoService = bancoService;
            _mapper = mapper;
        }

        public ICollection<BancoViewModel> ObterTodosBancos()
        {
            var bancos = this.GetAll();
            return _mapper.Map<List<BancoViewModel>>(bancos);
        }
    }
}
