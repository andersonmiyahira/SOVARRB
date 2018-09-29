using Domain.Entities;
using System.Collections.Generic;
using System.Linq;

namespace Domain.Interfaces.Services
{
    public interface ILayoutService : IServiceBase<Layout>
    {
        IQueryable<Layout> ObterPorFiltros(Layout filters);
    }
}
