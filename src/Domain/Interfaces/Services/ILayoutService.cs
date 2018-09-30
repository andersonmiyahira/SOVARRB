using Domain.Entities;
using System.Linq;

namespace Domain.Interfaces.Services
{
    public interface ILayoutService : IServiceBase<Layout>
    {
        IQueryable<Layout> ObterPorFiltros(Layout filters);
        Layout Alterar(Layout entity);
        Layout ObterPorCodigo(int id);
        void ExcluirPorCodigo(int id);
    }
}
