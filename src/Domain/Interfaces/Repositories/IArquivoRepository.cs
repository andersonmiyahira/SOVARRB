using Domain.Entities;
using System;
using System.Linq;

namespace Domain.Interfaces.Repositories
{
    public interface IArquivoRepository : IRepositoryBase<Arquivo>
    {
        IQueryable<Arquivo> ObterComFiltros(Arquivo filters, DateTime de, DateTime ate);
    }
}
