using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Domain.Interfaces.Repositories
{
    public interface IValorEsperadoRepository : IRepositoryBase<ValorEsperado>
    {
        IQueryable<ValorEsperado> ObterPorFiltros(ValorEsperado filters);
        ValorEsperado ObterPorCodigo(int id);
    }
}
