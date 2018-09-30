using Domain.Entities;
using System.Linq;

namespace Domain.Interfaces.Repositories
{
    public interface ILayoutRepository : IRepositoryBase<Layout>
    {
        IQueryable<Layout> ObterComItens(Arquivo filters);
        Layout ObterPorCodigo(int id);
    }
}
