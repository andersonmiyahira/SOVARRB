using System.Collections.Generic;

namespace Application.ViewModel.Request
{
    public class LayoutRequest
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
        public bool Obrigatorio { get; set; }

        public List<ValorEsperadoRequest> ValoresEsperados { get; set; }
    }
}
