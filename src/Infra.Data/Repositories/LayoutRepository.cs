using Domain.Entities;
using Domain.Interfaces.Repositories;
using Infra.Data.Context;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Infra.Data.Repositories
{
    public class LayoutRepository : RepositoryBase<Layout>, ILayoutRepository
    {
        public LayoutRepository(SOVARRBContext context) : base(context)
        {
        }
    }
}
