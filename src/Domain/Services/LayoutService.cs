using Domain.Entities;
using Domain.Interfaces.Repositories;
using Domain.Interfaces.Services;
using Domain.Interfaces.Uow;
using System.Collections.Generic;
using System.Linq;

namespace Domain.Services
{
    public class LayoutService : ServiceBase<Layout>, ILayoutService
    {
        private readonly ILayoutRepository _layoutRepository;
        private readonly ILayoutValorEsperadoRepository _layoutValorEsperadoRepository;
        private readonly IUnitOfWork _uow;


        public LayoutService(ILayoutRepository layoutRepository, 
                             ILayoutValorEsperadoRepository layoutValorEsperadoRepository,
                             IUnitOfWork unitOfWork) 
                            : base(layoutRepository)
        {
            _layoutRepository = layoutRepository;
            _layoutValorEsperadoRepository = layoutValorEsperadoRepository;
            _uow = unitOfWork;
        }

        public Layout Alterar(Layout model)
        {
            RemoverValoresEsperadosPorLayoutId(model.IdLayout);
            AdicionarValoresEsperador(model.IdLayout, model.IdValoresEsperados);

            var obj = _layoutRepository.ObterPorCodigo(model.IdLayout);

            obj.SetarDataAlteracao();

            obj.AlterarDados(model.Descricao, 
                             model.PosicaoDe, 
                             model.PosicaoAte, 
                             model.SegmentoId, 
                             model.TipoCampoId, 
                             model.Obrigatorio);

            _layoutRepository.Update(obj);
            _uow.Commit();

            return obj;
        }

        public Layout Inserir(Layout model)
        {
            AdicionarValoresEsperador(model.IdLayout, model.IdValoresEsperados); 

            _layoutRepository.Add(model);
            _uow.Commit();

            return model;
        }

        public List<Layout> Inserir(List<Layout> entities)
        {
            foreach (var entity in entities)
            {
                AdicionarValoresEsperador(entity.IdLayout, entity.IdValoresEsperados);

                _layoutRepository.Add(entity);
            }

            _uow.Commit();

            return entities;
        }

        public Layout ObterPorCodigo(int id)
        {
            return _layoutRepository.ObterPorCodigo(id);
        }

        public IQueryable<Layout> ObterPorFiltros(Layout filters)
        {
            var ret = _layoutRepository.ObterComItens(filters);
            return ret;
        }

        public void ExcluirPorCodigo(int id)
        {
            RemoverValoresEsperadosPorLayoutId(id);
            _layoutRepository.RemoveById(id);

            _uow.Commit();
        }

        private void AdicionarValoresEsperador(int idLayout, List<int> idValoresEsperados)
        {
            foreach (var idValorEsperado in idValoresEsperados)
            {
                _layoutValorEsperadoRepository.Add(new LayoutValorEsperado(idLayout, idValorEsperado));
            }
        }

        private void RemoverValoresEsperadosPorLayoutId(int id)
        {
            var layoutValorEsperado = _layoutValorEsperadoRepository.ObterPorCodigoLayout(id);
            foreach (var item in layoutValorEsperado)
            {
                _layoutValorEsperadoRepository.RemoveById(item.IdLayoutValorEsperado);
            }
        }
    }
}
