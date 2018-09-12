using Domain.Entities;

namespace Domain.Interfaces.Services
{
    public interface IBancoService : IServiceBase<Banco>
    {
        Banco Salvar(Banco banco);
        void Excluir(Banco bancoEntitie);
        Banco ObterPorId(int id);
    }
}
