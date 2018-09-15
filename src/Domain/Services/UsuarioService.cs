using Domain.Entities;
using Domain.Interfaces.Repositories;
using Domain.Interfaces.Services;

namespace Domain.Services
{
    public class ValorEsperadoService : ServiceBase<ValorEsperado>, IValorEsperadoService
    {
        private readonly IValorEsperadoRepository _valorEsperadoRepository;

        public ValorEsperadoService(IValorEsperadoRepository valorEsperadoRepository) : base(valorEsperadoRepository)
        {
            this._valorEsperadoRepository = valorEsperadoRepository;
        }
         
    }
}
