using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;

namespace Application.ViewModel.Response
{
    public class LayoutResponse
    {
        public int IdLayout { get; set; }
        public int BancoId { get; set; }
        public int TipoCNABId { get; set; }
        public int TipoRegistroId { get; set; }
        public int SegmentoId { get; set; }
        public int TipoBoletoId { get; set; }
        public int PosicaoDe { get; set; }
        public int PosicaoAte { get; set; }
        public string Descricao { get; set; }
        public int TipoCampoId { get; set; }
        public string TipoCampoDescricao { get; set; }
        public bool Obrigatorio { get; set; }
        public bool? TipoRegistroFlag { get; set; }

        public List<LayoutValorEsperadoResponse> ValoresEsperados { get; set; }

        public List<int> IdValoresEsperados
        {
            get
            {
                if(ValoresEsperados != null && ValoresEsperados.Count > 0)
                    return ValoresEsperados.Select(_ => _.ValorEsperado.IdValorEsperado).ToList();
                return null;
            }
        }

    }
}
