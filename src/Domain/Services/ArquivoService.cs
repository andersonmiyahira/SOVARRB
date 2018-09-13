using Domain.Entities;
using Domain.Interfaces.Repositories;
using Domain.Interfaces.Services;

namespace Domain.Services
{
    public class ArquivoService : ServiceBase<Arquivo>, IArquivoService
    {
        public ArquivoService(IRepositoryBase<Arquivo> repository) : base(repository)
        {

        }
    }
}
