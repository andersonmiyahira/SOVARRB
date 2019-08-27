using Domain.Entities;
using Domain.Filters;
using System.Linq;

namespace Domain.Interfaces.Services
{
    public interface IValorEsperadoService : IServiceBase<ValorEsperado>
    {
        IQueryable<ValorEsperado> ObterPorFiltros(ValorEsperadoFilter filters);
        ValorEsperado Inserir(ValorEsperado model);
        ValorEsperado Alterar(ValorEsperado model);
        void Excluir(int id);
    }
}
