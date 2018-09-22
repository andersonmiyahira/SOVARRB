using System;
using System.Collections.Generic;
using System.Text;

namespace Application.ViewModel.Request
{
    public class SegmentoRequest
    {
        public int IdSegmento { get; set; }
        public string Descricao { get; set; }
        public BancoRequest Banco { get;set; }
        public bool Ativo { get; set; }
    }
}
