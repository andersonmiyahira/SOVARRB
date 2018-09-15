using Domain.Entities;
using Domain.Interfaces.Repositories;
using Infra.Data.Context;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Infra.Data.Repositories
{
    public class SegmentoRepository : RepositoryBase<Segmento>, ISegmentoRepository
    {
        public SegmentoRepository(SOVARRBContext context) : base(context)
        {
        }
    }
}
