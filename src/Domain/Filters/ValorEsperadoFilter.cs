using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Filters
{
    public class ValorEsperadoFilter
    {
        public int bancoId { get; private set; }
        public int tipoRegistroId { get; set; }
        public int tipoCNABId { get; private set; }
        public int tipoBoletoId { get; private set; }
    }
}
