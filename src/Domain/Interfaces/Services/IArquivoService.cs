using System;
using System.Collections.Generic;
using Domain.Entities;

namespace Domain.Interfaces.Services
{
    public interface IArquivoService : IServiceBase<Arquivo>
    {
        List<LogArquivo> ValidarArquivos(List<Arquivo> arquivos, bool salvarLog);
        void SalvarArquivos(List<Arquivo> arquivos);
        List<Arquivo> ObterComFiltros(Arquivo filtros, DateTime de, DateTime ate);
    }
}
