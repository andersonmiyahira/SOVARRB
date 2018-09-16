using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using System.IO;

namespace Application.ViewModel.Request
{
    public class ImportarRequest
    {
        public int BancoId { get; set; }
        public int TipoCNABId { get; set; }
        public int TipoBoletoId { get; set; }
        public List<IFormFile> FormFiles { get; set; }        
    }

    public class ArquivoImportacao
    {
        public ArquivoImportacao(string nome, Stream arquivo)
        {
            Nome = nome;
            ArquivoStream = arquivo;
        }

        public string Nome { get; set; }
        public Stream ArquivoStream { get; set; }
    }
}
