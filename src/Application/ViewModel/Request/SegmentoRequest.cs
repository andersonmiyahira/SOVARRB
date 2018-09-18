using System;
using System.Collections.Generic;
using System.Text;

namespace Application.ViewModel.Request
{
    public class SegmentoRequest
    {
        public int IdSegmento { get; set; }
        public string Descricao { get; set; }
        public int BancoId { get;set; }
        public DateTime DataCadastro { get; set; }
        public bool Ativo { get; set; }
    }
}
