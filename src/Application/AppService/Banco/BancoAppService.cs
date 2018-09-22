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

        public ICollection<BancoResponse> ObterTodosBancos()
        {
            var bancos = this.GetAll();
            return _mapper.Map<List<BancoResponse>>(bancos);
        }

        public BancoResponse Salvar(BancoRequest banco)
        {
            var bancoEntitie = _mapper.Map<Domain.Entities.Banco>(banco);
            return _mapper.Map<BancoResponse>(_bancoService.Salvar(bancoEntitie));
        }

        public void Excluir(int id)
        {
            _bancoService.ExcluirPorId(id);
        }
         
        public BancoResponse ObterPorId(int id)
        {
            return _mapper.Map<BancoResponse>(_bancoService.ObterPorId(id));
        } 
    }
}
