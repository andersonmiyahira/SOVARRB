using Domain.Entities;
using System.Linq;

namespace Domain.Interfaces.Services
{
    public interface ILayoutService : IServiceBase<Layout>
    {
        IQueryable<Layout> ObterPorFiltros(Layout filters);
        void ExcluirPorCodigo(int id);
    }
}
