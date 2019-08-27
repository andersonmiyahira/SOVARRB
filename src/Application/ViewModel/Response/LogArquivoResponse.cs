using System;

namespace Application.ViewModel.Response
{
    public class LogArquivoResponse
    {
        public int IdLogArquivo { get; private set; }
        public int Linha { get; private set; }
        public int PosicaoDe { get; private set; }
        public int PosicaoAte { get; private set; }
        public bool EhValido { get; private set; }
        public DateTime DataCadastro { get; private set; }
        public string Mensagem { get; private set; }
        public int TipoParametroId { get; set; }

        public ArquivoResponse Arquivo { get; private set; }
        public LayoutResponse Layout { get; private set; }
    }
}
