using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

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
        public bool Obrigatorio { get; protected set; }

        public DateTime DataCadastro { get; protected set; }
        public DateTime? DataAlteracao { get; protected set; }

        public Banco Banco { get; private set; }
        public List<LayoutValorEsperado> LayoutValoresEsperados { get; private set; }

        [NotMapped]
        public List<int> IdValoresEsperados { get; protected set; }

        internal void SetarDataAlteracao()
        {
            DataAlteracao = DateTime.Now;
        }

        internal void AlterarDados(string descricao, int posicaoDe, int posicaoAte, int? segmentoId, int tipoCampoId, bool obrigatorio)
        {
            Descricao = descricao;
            PosicaoDe = posicaoDe;
            PosicaoAte = posicaoAte;
            TipoCampoId = tipoCampoId;
            Obrigatorio = obrigatorio;

            if (segmentoId != default(int))
                SegmentoId = segmentoId;
        }
    }
}
