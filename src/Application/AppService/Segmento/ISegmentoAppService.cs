using Application.AppService.Base;
using Application.ViewModel.Request;
using Application.ViewModel.Response;

namespace Application.AppService.Segmento
{
    public interface ISegmentoAppService : IAppServiceBase<Domain.Entities.Segmento>
    {
        SegmentoResponse Inserir(SegmentoRequest request);
        SegmentoResponse Alterar(SegmentoRequest request);
        void Excluir(SegmentoRequest request);
    }
}
