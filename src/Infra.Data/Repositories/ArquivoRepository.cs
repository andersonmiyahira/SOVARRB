using Domain.Entities;
using Domain.Interfaces.Repositories;
using Infra.Data.Context;
using System;
using System.Collections.Generic;
using System.Text;

namespace Infra.Data.Repositories
{
    public class ArquivoRepository : RepositoryBase<Arquivo>, IArquivoRepository
    {
        public ArquivoRepository(SOVARRBContext context) : base(context)
        {
        }
    }
}
