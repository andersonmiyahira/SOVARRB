using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    public class Arquivo
    {
        public Arquivo(int idUsuario, int idBanco, string nomeArquivoOriginal, int idTipoCNAB, int idTipoBoleto, List<string> linhasArquivo)
        {
            IdUsuario = idUsuario;
            IdBanco = idBanco;
            NomeArquivoOriginal = nomeArquivoOriginal;
            IdTipoCNAB = idTipoCNAB;
            IdTipoBoleto = idTipoBoleto;
            LinhasArquivo = linhasArquivo;
        }

        public int IdArquivo { get; private set; }
        public int IdUsuario { get; private set; }
        public int IdBanco { get; private set; }
        public string NomeArquivoOriginal { get; private set; }
        public string NomeArquivoGerado { get; private set; }
        public int IdTipoCNAB { get; private set; }
        public int IdTipoBoleto { get; private set; }
        public bool EhValido { get; private set; }
        public DateTime DataCadastro { get; private set; }
        public DateTime DataAlteracao { get; private set; }

        [NotMapped]
        public List<string> LinhasArquivo { get; set; }
    }
}
