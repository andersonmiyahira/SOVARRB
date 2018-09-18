using Domain.Entities;

namespace Domain.Interfaces.Services
{
    public interface ISegmentoService : IServiceBase<Segmento>
    {
        Segmento Inserir(Segmento segmento);
        Segmento Alterar(Segmento segmento);
        void Excluir(Segmento segmento);
    }
}
