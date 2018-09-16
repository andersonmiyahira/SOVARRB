using System;
using System.Collections.Generic;

namespace Domain.Entities
{
    public class Layout
    {
        public int IdLayout { get; protected set; }
        public int BancoId { get; protected set; }
        public int IdTipoCNAB { get; protected set; }
        public int IdTipoTransacao { get; protected set; }
        public int IdTipoRegistro { get; protected set; }
        public int? IdSegmento { get; protected set; }
        public int IdTipoBoleto { get; protected set; }
        public int PosicaoDe { get; protected set; }
        public int PosicaoAte { get; protected set; }
        public int IdTipoCampo { get; protected set; }
        public string Descricao { get; protected set; }        
        public DateTime DataCadastro { get; protected set; }
        public bool Obrigatorio { get; protected set; }

        public Banco Banco { get; private set; }
        public List<LayoutValorEsperado> LayoutValoresEsperados { get; private set; }
    }
}
