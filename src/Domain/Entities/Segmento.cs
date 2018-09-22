using System;

namespace Domain.Entities
{
    public class Segmento
    {
        public int IdSegmento { get; private set; }
        public string Descricao { get; private set; }
        public int BancoId { get; private set; }
        public bool Ativo { get; private set; }
        public DateTime? DataCadastro { get; private set; }
        public DateTime? DataAlteracao { get; private set; }

        public Banco Banco { get; private set; }

        internal void SetarDataCadastro(DateTime data)
        {
            DataCadastro = data;
        }

        internal void SetarDataAlteracao()
        {
            DataAlteracao = DateTime.Now;
        }

        internal void AlterarDados(Banco banco, string descricao, bool ativo)
        {
            Banco = banco;
            Descricao = descricao;
            Ativo = ativo;
        }

        internal void LimparBanco()
        {
            Banco = null;
        }
    }
}
