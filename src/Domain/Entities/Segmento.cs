using System;

namespace Domain.Entities
{
    public class Segmento
    {
        public int IdSegmento { get; private set; }
        public string Descricao { get; private set; }
        public int IdBanco { get; private set; }
        public DateTime DataCadastro { get; private set; }
        public bool Ativo { get; private set; }
    }
}
