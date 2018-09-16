using System;

namespace Application.ViewModel.Response
{
    public class SegmentoResponse
    {
        public int IdSegmento { get; set; }
        public string Descricao { get; set; }
        public int BancoId { get; set; }
        public DateTime DataCadastro { get; set; }
        public bool Ativo { get; set; }
    }
}
