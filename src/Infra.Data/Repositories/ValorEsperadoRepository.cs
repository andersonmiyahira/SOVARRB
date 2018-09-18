using Domain.Entities;
using Domain.Interfaces.Repositories;
using Infra.Data.Context;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Infra.Data.Repositories
{
    public class ValorEsperadoRepository : RepositoryBase<ValorEsperado>, IValorEsperadoRepository
    {
        public ValorEsperadoRepository(SOVARRBContext context) : base(context)
        {

        }
    }
}
