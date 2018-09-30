using System.Linq;
using Domain.Entities;
using Domain.Interfaces.Repositories;
using Domain.Interfaces.Services;
using Domain.Interfaces.Uow;

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

        public void ExcluirPorCodigo(int id)
        {
            var layoutValorEsperado = _layoutValorEsperadoRepository.ObterPorCodigoLayout(id);
            foreach (var item in layoutValorEsperado)
            {
                _layoutValorEsperadoRepository.RemoveById(item.IdLayoutValorEsperado);
            }
            _layoutRepository.RemoveById(id);

            _uow.Commit();
        }

        public IQueryable<Layout> ObterPorFiltros(Layout filters)
        {
            var ret = _layoutRepository.ObterComItens(new Arquivo(filters.BancoId, filters.TipoCNABId, filters.TipoBoletoId));
            return ret;
        }
    }
}
