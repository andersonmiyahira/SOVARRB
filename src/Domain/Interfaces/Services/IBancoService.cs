using Domain.Entities;

namespace Domain.Interfaces.Services
{
    public interface IBancoService : IServiceBase<Banco>
    {
        Banco Salvar(Banco banco);
        void ExcluirPorId(int id);
        Banco ObterPorId(int id);
    }
}
