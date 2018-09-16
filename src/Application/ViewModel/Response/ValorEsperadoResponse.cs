using System;

namespace Application.ViewModel.Response
{
    public class ValorEsperadoResponse
    {
        public int IdValorEsperado { get; set; }
        public string Descricao { get; set; }
        public string Valor { get; set; }
        public int BancoId { get; set; }
        public int TipoCNABId { get; set; }
        public int TipoBoletoId { get; set; }
        public DateTime DataCadastro { get; set; }
        public bool Ativo { get; set; }
    }
}
