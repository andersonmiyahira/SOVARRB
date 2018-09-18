using Domain.Interfaces.Uow;
using Infra.Data.Context;

namespace Infra.Data.UoW
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly SOVARRBContext _context;

        public UnitOfWork(SOVARRBContext context)
        {
            _context = context;
        }

        public bool Commit()
        {
            return _context.SaveChanges() > 0;
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
