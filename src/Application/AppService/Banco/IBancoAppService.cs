using Application.AppService.Base;
using Application.ViewModel;
using Application.ViewModel.Request;
using System.Collections.Generic;

namespace Application.AppService.Banco
{
    public interface IBancoAppService : IAppServiceBase<Domain.Entities.Banco>
    {
        ICollection<BancoViewModel> ObterTodosBancos();
        BancoViewModel ObterPorId(int id);
        BancoViewModel Salvar(ViewModel.Request.Banco banco);
        void Excluir(ViewModel.Request.Banco banco);
    }
}
