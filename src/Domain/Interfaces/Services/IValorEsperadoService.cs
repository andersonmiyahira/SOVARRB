using Domain.Entities;
using System.Linq;

namespace Domain.Interfaces.Services
{
    public interface IValorEsperadoService : IServiceBase<ValorEsperado>
    {
        IQueryable<ValorEsperado> ObterPorFiltros(ValorEsperado filters);
        ValorEsperado Inserir(ValorEsperado model);
        ValorEsperado Alterar(ValorEsperado model);
        void Excluir(ValorEsperado model);
    }
}
