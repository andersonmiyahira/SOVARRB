using System;

namespace Domain.Entities
{
    public class LogArquivo
    {
        public int IdLogArquivo { get; private set; }
        public int IdArquivo { get; set; }
        public int Linha { get; private set; }
        public int PosicaoDe { get; private set; }
        public int PosicaoAte { get; private set; }
        public bool EhValido { get; private set; }
        public DateTime DataCadastro { get; private set; }
        public string Mensagem { get; private set; }
        public int IdTipoParametro { get; set; }
    }
}
