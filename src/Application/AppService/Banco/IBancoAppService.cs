using Application.AppService.Base;
using Application.ViewModel;
using System.Collections.Generic;

namespace Application.AppService.Banco
{
    public interface IBancoAppService : IAppServiceBase<Domain.Entities.Banco>
    {
        ICollection<BancoViewModel> ObterTodosBancos();
    }
}
