using Domain.Entities;
using Domain.Interfaces.Repositories;
using Domain.Interfaces.Services;
using Domain.Interfaces.Uow;
using System;

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
            var obj = _segmentoRepository.ObterPorCodigo(segmento.IdSegmento);
            obj.SetarDataAlteracao();
            obj.AlterarDados(segmento.Banco, segmento.Descricao, segmento.Ativo);

            _segmentoRepository.Update(obj);
            _uow.Commit();

            return segmento;
        }

        public void Excluir(Segmento segmento)
        {
            _segmentoRepository.Remove(segmento);
            _uow.Commit();
        }

        public void ExcluirPorId(int id)
        {
            _segmentoRepository.RemoveById(id);
            _uow.Commit();
        }

        public Segmento Inserir(Segmento segmento)
        {
            segmento.SetarDataAlteracao();
            segmento.SetarDataCadastro(DateTime.Now);
            segmento.LimparBanco();

            _segmentoRepository.Add(segmento);
            _uow.Commit();

            return segmento;
        }
    }
}
