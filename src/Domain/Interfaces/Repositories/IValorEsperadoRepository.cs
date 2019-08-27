using Domain.Entities;
using Domain.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Domain.Interfaces.Repositories
{
    public interface IValorEsperadoRepository : IRepositoryBase<ValorEsperado>
    {
        IQueryable<ValorEsperado> ObterPorFiltros(ValorEsperadoFilter filters);
        ValorEsperado ObterPorCodigo(int id);
    }
}
