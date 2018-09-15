using Domain.Interfaces.Services;

namespace Application.AppService.ValorEsperado
{
    public class ValorEsperadoAppService : AppServiceBase<Domain.Entities.ValorEsperado>, IValorEsperadoAppService
    {
        public ValorEsperadoAppService(IValorEsperadoService serviceBase) : base(serviceBase)
        {
        }
    }
}
