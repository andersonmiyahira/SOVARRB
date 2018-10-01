using System;

namespace Domain.Entities
{
    public class Banco
    {
        public int Id { get; private set; }
        public string Descricao { get; private set; }
        public bool Ativo { get; private set; }
        public DateTime DataCadastro { get; private set; }
        public DateTime? DataAlteracao { get; private set; }

        internal void SetarDataCadastro(DateTime now)
        {
            DataCadastro = now;
        }

        internal void SetarDataAlteracao(DateTime now)
        {
            DataAlteracao = now;
        }
    }
}
