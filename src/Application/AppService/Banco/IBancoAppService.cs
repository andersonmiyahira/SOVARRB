using Application.AppService.Base;
using Application.ViewModel;
using Application.ViewModel.Request;
using System.Collections.Generic;

namespace Application.AppService.Banco
{
    public interface IBancoAppService : IAppServiceBase<Domain.Entities.Banco>
    {
        ICollection<BancoResponse> ObterTodosBancos();
        BancoResponse ObterPorId(int id);
        BancoResponse Salvar(BancoRequest banco);
        void Excluir(int id);
    }
}
