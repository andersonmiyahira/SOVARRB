using Domain.Entities;
using Domain.Interfaces.Repositories;
using Domain.Interfaces.Services;
using Domain.Interfaces.Uow;

namespace Domain.Services
{
    public class SegmentoService : ServiceBase<Segmento>, ISegmentoService
    {
        private readonly ISegmentoRepository _segmentoRepository;
        private readonly IUnitOfWork _uow;

        public SegmentoService(ISegmentoRepository segmentoRepository,
                               IUnitOfWork uow) : base(segmentoRepository)
        {
            _segmentoRepository = segmentoRepository;
            _uow = uow;
        }

        public Segmento Alterar(Segmento segmento)
        {
            _segmentoRepository.Update(segmento);
            _uow.Commit();

            return segmento;
        }

        public void Excluir(Segmento segmento)
        {
            _segmentoRepository.Remove(segmento);
            _uow.Commit();
        }

        public Segmento Inserir(Segmento segmento)
        {
            _segmentoRepository.Add(segmento);
            _uow.Commit();

            return segmento;
        }
    }
}
