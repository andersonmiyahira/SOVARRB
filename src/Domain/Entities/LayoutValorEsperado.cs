using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Entities
{
    public class LayoutValorEsperado
    {
        public int IdLayoutValorEsperado { get; private set; }
        public int LayoutId { get; private set; }
        public int ValorEsperadoId { get; private set; }

        public ValorEsperado ValorEsperado { get; private set; }
        public Layout Layout { get; private set; }
    }
}
