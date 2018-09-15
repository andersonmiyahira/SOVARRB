using Domain.Entities;
using Domain.Interfaces.Repositories;
using Domain.Interfaces.Services;

namespace Domain.Services
{
    public class SegmentoService : ServiceBase<Segmento>, ISegmentoService
    {
        private readonly ISegmentoRepository _segmentoRepository;

        public SegmentoService(ISegmentoRepository segmentoRepository) : base(segmentoRepository)
        {
            this._segmentoRepository = segmentoRepository;
        }
         
    }
}
