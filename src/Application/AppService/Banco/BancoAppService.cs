using Application.Helpers;
using Application.ViewModel;
using Application.ViewModel.Request;
using AutoMapper;
using Domain.Interfaces.Services;
using System.Collections.Generic;
using System.IO;

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

        public BancoViewModel Salvar(ViewModel.Request.Banco banco)
        {
            var bancoEntitie = _mapper.Map<Domain.Entities.Banco>(banco);
            return _mapper.Map<BancoViewModel>(_bancoService.Salvar(bancoEntitie));
        }

        public void Excluir(ViewModel.Request.Banco banco)
        {
            var bancoEntitie = _mapper.Map<Domain.Entities.Banco>(banco);
            _bancoService.Excluir(bancoEntitie);
        }
         
        public BancoViewModel ObterPorId(int id)
        {
            return _mapper.Map<BancoViewModel>(_bancoService.ObterPorId(id));
        } 
    }
}
