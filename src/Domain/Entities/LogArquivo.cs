using System;

namespace Domain.Entities
{
    public class LogArquivo
    {
        public LogArquivo(int arquivoId, int linha, int posicaoDe, int posicaoAte, bool ehValido, DateTime dataCadastro, string mensagem, int tipoParametroId)
        {   
            ArquivoId = arquivoId;
            Linha = linha;
            PosicaoDe = posicaoDe;
            PosicaoAte = posicaoAte;
            EhValido = ehValido;
            DataCadastro = dataCadastro;
            Mensagem = mensagem;
            TipoParametroId = tipoParametroId;
        }

        public int IdLogArquivo { get; private set; }
        public int ArquivoId { get; set; }
        public int Linha { get; private set; }
        public int PosicaoDe { get; private set; }
        public int PosicaoAte { get; private set; }
        public bool EhValido { get; private set; }
        public DateTime DataCadastro { get; private set; }
        public string Mensagem { get; private set; }
        public int TipoParametroId { get; set; }
    }
}
