using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    public class Arquivo
    {
        public Arquivo(int usuarioId, int bancoId, string nomeArquivoOriginal, int tipoCNABId, int tipoBoletoId, List<string> linhasArquivo)
        {
            UsuarioId = usuarioId;
            BancoId = bancoId;
            NomeArquivoOriginal = nomeArquivoOriginal;
            TipoCNABId = tipoCNABId;
            TipoBoletoId = tipoBoletoId;
            LinhasArquivo = linhasArquivo;
        }

        public int IdArquivo { get; private set; }
        public int UsuarioId { get; private set; }
        public int BancoId { get; private set; }
        public string NomeArquivoOriginal { get; private set; }
        public string NomeArquivoGerado { get; private set; }
        public int TipoCNABId { get; private set; }
        public int TipoBoletoId { get; private set; }
        public bool EhValido { get; private set; }
        public DateTime DataCadastro { get; private set; }
        public DateTime DataAlteracao { get; private set; }

        [NotMapped]
        public List<string> LinhasArquivo { get; set; }
    }
}
