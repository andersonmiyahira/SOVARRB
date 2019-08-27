using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    public class Arquivo 
    {
        public Arquivo()
        {

        }

        public Arquivo(string NomeGerado)
        {
            NomeArquivoGerado = NomeGerado;
        }

        public Arquivo(int usuarioId, int bancoId, string nomeArquivoOriginal, int tipoCNABId, int tipoBoletoId)
        {
            UsuarioId = usuarioId;
            BancoId = bancoId;
            NomeArquivoOriginal = nomeArquivoOriginal;
            TipoCNABId = tipoCNABId;
            TipoBoletoId = tipoBoletoId;
            DataCadastro = DateTime.Now;
            DataAlteracao = DateTime.Now;
            NomeArquivoGerado = Guid.NewGuid().ToString();
        }

        public Arquivo(int bancoId, int tipoCNABId, int tipoBoletoId)
        {
            BancoId = bancoId;
            TipoCNABId = tipoCNABId;
            TipoBoletoId = tipoBoletoId;
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
        public DateTime? DataAlteracao { get; private set; }
        public byte[] Binario { get; private set; }

        public Banco Banco { get; private set; }

        public void SetarArquivoBinario(byte[] binario)
        {
            Binario = binario;
        }

        public void SetarLinhas(List<string> linhas)
        {
            LinhasArquivo = linhas;
        }

        public void SetarEhValido(bool ehValido)
        {
            EhValido = ehValido;
        }

        [NotMapped]
        public List<string> LinhasArquivo { get; private set; }
    }
}
