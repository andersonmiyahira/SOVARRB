using System;
using System.Collections.Generic;

namespace Domain.Entities
{
    public class ValorEsperado
    {
        public int IdValorEsperado { get; private set; }
        public string Descricao { get; private set; }
        public string Valor { get; private set; }
        public int BancoId { get; private set; }
        public int TipoCNABId { get; private set; }
        public int TipoBoletoId { get; private set; }
        public DateTime DataCadastro { get; private set; }
        public bool Ativo { get; private set; }

        public Banco Banco { get; private set; }
        public List<LayoutValorEsperado> LayoutValoresEsperados { get; private set; }
    }
}
