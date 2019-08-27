using Domain.Entities;
using System.Collections.Generic;

namespace Domain.Interfaces.Repositories
{
    public interface ILayoutValorEsperadoRepository : IRepositoryBase<LayoutValorEsperado>
    {
        List<LayoutValorEsperado> ObterPorCodigoLayout(int IdLayout);
    }
}
