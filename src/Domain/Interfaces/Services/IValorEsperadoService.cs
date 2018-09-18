using Domain.Entities;

namespace Domain.Interfaces.Services
{
    public interface IValorEsperadoService : IServiceBase<ValorEsperado>
    {
        ValorEsperado Inserir(ValorEsperado model);
        ValorEsperado Alterar(ValorEsperado model);
        void Excluir(ValorEsperado model);
    }
}
