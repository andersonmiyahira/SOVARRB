using System;
using System.Collections.Generic;
using Domain.Entities;

namespace Domain.Interfaces.Services
{
    public interface IArquivoService : IServiceBase<Arquivo>
    {
        void ValidarArquivos(List<Arquivo> arquivos);
        List<Arquivo> ObterComFiltros(Arquivo filtros, DateTime de, DateTime ate);
    }
}
