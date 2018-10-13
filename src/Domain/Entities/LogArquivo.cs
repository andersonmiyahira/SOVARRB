using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    public partial class LogArquivo
    {
        public LogArquivo()
        {

        }

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
        public int ArquivoId { get; private set; }
        public int LayoutId { get; private set; }
        public int Linha { get; private set; }
        public int PosicaoDe { get; private set; }
        public int PosicaoAte { get; private set; }
        public bool EhValido { get; private set; }
        public DateTime DataCadastro { get; private set; }
        public string Mensagem { get; private set; }
        public int TipoParametroId { get; set; }

        public Arquivo Arquivo { get; private set; }

        public Layout Layout { get; private set; }

    }

    //filter
    public partial class LogArquivo
    {
        [NotMapped]
        public bool? EhValidoFilter { get; private set; }
    }
}
