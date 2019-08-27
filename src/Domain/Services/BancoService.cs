using Domain.Entities;
using Domain.Interfaces.Repositories;
using Domain.Interfaces.Services;
using Domain.Interfaces.Uow;
using System;

namespace Domain.Services
{
    public class BancoService : ServiceBase<Banco>, IBancoService
    {
        private readonly IBancoRepository _bancoRepository;
        private readonly IUnitOfWork _uow;

        public BancoService(IBancoRepository bancoRepository,
                            IUnitOfWork unitOfWork) : base(bancoRepository)
        {
            _bancoRepository = bancoRepository;
            _uow = unitOfWork;
        }

        public void ExcluirPorId(int id)
        {
            _bancoRepository.RemoveById(id);
            _uow.Commit();
        }

        public Banco ObterPorId(int id)
        {
            return _bancoRepository.GetById(id);
        }

        public Banco Salvar(Banco banco)
        {
            var bancoSalvo = _bancoRepository.ObterPorCodigo(banco.Id);
            if (bancoSalvo != null)
            {
                banco.SetarDataCadastro(bancoSalvo.DataCadastro);
                banco.SetarDataAlteracao(DateTime.Now);
                _bancoRepository.Update(banco);
            }
            else
            {
                banco.SetarDataCadastro(DateTime.Now);
                _bancoRepository.Add(banco);
            }
            _uow.Commit();
            return banco;
        }
    }
}
