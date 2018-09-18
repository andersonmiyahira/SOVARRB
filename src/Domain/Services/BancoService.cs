using Domain.Entities;
using Domain.Interfaces.Repositories;
using Domain.Interfaces.Services;
using Domain.Interfaces.Uow;

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

        public void Excluir(Banco bancoEntitie)
        {
            _bancoRepository.Remove(bancoEntitie);
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
                _bancoRepository.Update(banco);
            else
                _bancoRepository.Add(banco);

            _uow.Commit();
            return banco;
        }
    }
}
