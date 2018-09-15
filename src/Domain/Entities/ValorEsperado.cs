using System;

namespace Domain.Entities
{
    public class ValorEsperado
    {
        public int IdValoreEsperado { get; private set; }
        public string Descricao { get; private set; }
        public string valor { get; private set; }
        public int IdBanco { get; private set; }
        public int IdTipoCNAB { get; private set; }
        public int IdTipoBoleto { get; private set; }
        public DateTime DataCadastro { get; private set; }
        public bool Ativo { get; private set; }
    }
}
