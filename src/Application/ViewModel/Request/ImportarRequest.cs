using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using System.IO;

namespace Application.ViewModel.Request
{
    public class ImportarRequest
    {
        public ImportarRequest(int idBanco, List<IFormFile> formFiles)
        {
            IdBanco = idBanco;

            ArquivoImportacao = new List<ArquivoImportacao>();
            foreach (var file in formFiles)
            {
                ArquivoImportacao.Add(new ArquivoImportacao(file.FileName, file.OpenReadStream()));
            }
        }

        public int IdBanco { get; private set; }
        public int IdTipoCNAB { get; private set; }
        public int IdTipoBoleto { get; private set; }

        public List<ArquivoImportacao> ArquivoImportacao { get; private set; }
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
