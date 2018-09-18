using Domain.Interfaces.Services;

namespace Application.AppService.Segmento
{
    public class LayoutAppService : AppServiceBase<Domain.Entities.Layout>, ILayoutAppService
    {
        public LayoutAppService(ILayoutService serviceBase) : base(serviceBase)
        {
        }
    }
}
