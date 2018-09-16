using Domain.Entities;
using System.Collections.Generic;

namespace Domain.Interfaces.Repositories
{
    public interface ILayoutRepository : IRepositoryBase<Layout>
    {
        List<Layout> ObterComItens();
    }
}
