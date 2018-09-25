using System;
using System.Linq;
using Domain.Entities;
using Domain.Interfaces.Repositories;
using Domain.Interfaces.Services;
using Domain.Interfaces.Uow;

namespace Domain.Services
{
    public class ValorEsperadoService : ServiceBase<ValorEsperado>, IValorEsperadoService
    {
        private readonly IValorEsperadoRepository _valorEsperadoRepository;
        private readonly IUnitOfWork _uow;

        public ValorEsperadoService(IValorEsperadoRepository valorEsperadoRepository,
                                    IUnitOfWork uow) : base(valorEsperadoRepository)
        {
            _valorEsperadoRepository = valorEsperadoRepository;
            _uow = uow;
        }

        public ValorEsperado Alterar(ValorEsperado model)
        {
            var obj = _valorEsperadoRepository.ObterPorCodigo(model.IdValorEsperado);
            obj.SetarDataAlteracao();
            obj.AlterarDados(model.Descricao, model.Valor, model.BancoId, model.TipoCNABId, model.TipoBoletoId, model.Ativo);

            _valorEsperadoRepository.Update(obj);
            _uow.Commit();

            return model;
        }

        public void Excluir(int id)
        {
            _valorEsperadoRepository.RemoveById(id);
            _uow.Commit();
        }

        public ValorEsperado Inserir(ValorEsperado model)
        {
            model.SetarDataAlteracao();
            model.SetarDataCadastro(DateTime.Now);
            model.LimparEntidades();

            _valorEsperadoRepository.Add(model);
            _uow.Commit();

            return model;
        }

        public IQueryable<ValorEsperado> ObterPorFiltros(ValorEsperado filters)
        {
            return _valorEsperadoRepository.ObterPorFiltros(filters);
        }
    }
}
