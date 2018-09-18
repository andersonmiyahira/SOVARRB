using System;

namespace Application.ViewModel.Response
{
    public class ArquivoResponse
    {
        public int IdArquivo { get; set; }
        public int UsuarioId { get; set; }
        public int BancoId { get; set; }
        public string NomeArquivoOriginal { get; set; }
        public string NomeArquivoGerado { get; set; }
        public int TipoCNABId { get; set; }
        public int TipoBoletoId { get; set; }
        public bool EhValido { get; set; }
        public DateTime DataCadastro { get; set; }
        public DateTime DataAlteracao { get; set; }
    }
}
