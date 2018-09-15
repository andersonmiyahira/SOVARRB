using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Entities
{
    public class LayoutValorEsperado
    {
        public int IdLayoutValorEsperado { get; private set; }
        public int IdLayout { get; private set; }
        public int IdValorEsperado { get; private set; }
    }
}
