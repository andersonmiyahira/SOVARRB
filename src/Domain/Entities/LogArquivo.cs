using Domain.Enums;
using Domain.Extensions;
using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace Domain.Entities
{
    //Entity
    public partial class LogArquivo
    {
        public LogArquivo()
        {

        }

        public LogArquivo(Arquivo arquivo, int linha, int posicaoDe, int posicaoAte, bool ehValido, DateTime dataCadastro, string mensagem, int tipoParametroId, int qtdCaracteresLinha)
        {   
            Arquivo = new Arquivo(arquivo.NomeArquivoGerado);
            ArquivoId = arquivo.IdArquivo;
            Linha = linha;
            PosicaoDe = posicaoDe;
            PosicaoAte = posicaoAte;
            EhValido = ehValido;
            DataCadastro = dataCadastro;
            Mensagem = mensagem;
            TipoParametroId = tipoParametroId;
            QtdCaracteresLinha = qtdCaracteresLinha;
        }

        public int IdLogArquivo { get; private set; }
        public int ArquivoId { get; private set; }
        public int? LayoutId { get; private set; }
        public int Linha { get; private set; }
        public int PosicaoDe { get; private set; }
        public int PosicaoAte { get; private set; }
        public bool EhValido { get; private set; }
        public DateTime DataCadastro { get; private set; }
        public string Mensagem { get; private set; }
        public int TipoParametroId { get; set; }

        public Arquivo Arquivo { get; private set; }

        public Layout Layout { get; private set; }

        public void SetarEhValido(bool ehValido)
        {
            EhValido = ehValido;
        }

        public void SetarMensagem(string mensagem)
        {
            Mensagem = mensagem;
        }

        public void SetarLayout(Layout layout)
        {
            Layout = layout;
        }
    }

    //Filter
    public partial class LogArquivo
    {
        [NotMapped]
        public bool? EhValidoFilter { get; private set; }
    }

    //Response
    public partial class LogArquivo
    {
        [NotMapped]
        public int Tipo
        {
            get
            {
                return Layout != null ? Layout.TipoRegistroId : 0;
            }
        }

        [NotMapped]
        public int QtdCaracteresLinha
        {
            get;
            private set;
        }

        [NotMapped]
        public string MensagemFormatada
        {
            get
            {
                if(EhValido)
                    return $"Linha {Linha} - OK";

                if((!EhValido && Layout.TipoCNABId == (int)ETipoCNAB.CNAB240 && QtdCaracteresLinha < 240)
                    || (!EhValido && Layout.TipoCNABId == (int)ETipoCNAB.CNAB400 && QtdCaracteresLinha < 400))
                {
                    var cnab = Layout.ETipoCNAB.GetDescription();
                    return $"Linha {Linha} - Quantidade de caracteres inválidos para " + cnab + ", Encontrado: " + QtdCaracteresLinha + " caracteres.";
                }

                var valoresEsperados = Layout.ETipoCampo.GetDescription();
                if(Layout.LayoutValoresEsperados.Any())
                    valoresEsperados = string.Join(",", Layout.LayoutValoresEsperados.Select(_ => _.ValorEsperado.Valor));

                return $"Linha {Linha}, Posição {PosicaoDe} - Posição {PosicaoAte}, Esperado: {valoresEsperados} - Encontrado: {Mensagem}";
            }
        }
    }
}
