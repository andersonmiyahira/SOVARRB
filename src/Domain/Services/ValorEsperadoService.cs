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
            _valorEsperadoRepository.Update(model);
            _uow.Commit();

            return model;
        }

        public void Excluir(ValorEsperado model)
        {
            _valorEsperadoRepository.Remove(model);
            _uow.Commit();
        }

        public ValorEsperado Inserir(ValorEsperado model)
        {
            _valorEsperadoRepository.Add(model);
            _uow.Commit();

            return model;
        }
    }
}
