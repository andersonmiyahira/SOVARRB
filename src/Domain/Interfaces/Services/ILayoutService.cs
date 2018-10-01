using Domain.Entities;
using System.Linq;

namespace Domain.Interfaces.Services
{
    public interface ILayoutService : IServiceBase<Layout>
    {
        IQueryable<Layout> ObterPorFiltros(Layout filters);

        Layout ObterPorCodigo(int id);

        void ExcluirPorCodigo(int id);

        Layout Alterar(Layout entity);

        Layout Inserir(Layout entity);
    }
}
