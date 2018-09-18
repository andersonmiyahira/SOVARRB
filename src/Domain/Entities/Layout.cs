using System;
using System.Collections.Generic;

namespace Domain.Entities
{
    public class Layout
    {
        public int IdLayout { get; protected set; }
        public int BancoId { get; protected set; }
        public int TipoCNABId { get; protected set; }
        public int TipoTransacaoId { get; protected set; }
        public int TipoRegistroId { get; protected set; }
        public int? SegmentoId { get; protected set; }
        public int TipoBoletoId { get; protected set; }
        public int PosicaoDe { get; protected set; }
        public int PosicaoAte { get; protected set; }
        public int TipoCampoId { get; protected set; }
        public string Descricao { get; protected set; }        
        public DateTime DataCadastro { get; protected set; }
        public bool Obrigatorio { get; protected set; }

        public Banco Banco { get; private set; }
        public List<LayoutValorEsperado> LayoutValoresEsperados { get; private set; }
    }
}
