using System;
 
namespace Domain.Interfaces.Uow
{
    public interface IUnitOfWork : IDisposable
    {
        bool Commit();
    }
}
