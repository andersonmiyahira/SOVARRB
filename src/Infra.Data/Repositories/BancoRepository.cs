using Domain.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace Infra.Data.Repositories
{
    public class BancoRepository : RepositoryBase<Domain.Entities.Banco>, IBancoRepository
    {
    }
}
