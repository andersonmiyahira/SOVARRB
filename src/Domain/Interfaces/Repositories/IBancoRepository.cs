using Domain.Entities;

namespace Domain.Interfaces.Repositories
{
    public interface IBancoRepository : IRepositoryBase<Banco>
    {
        Banco ObterPorCodigo(int id);
    }
}
