using System;

namespace Application.ViewModel.Filters
{
    public class ArquivoFilter
    {
        public int UsuarioId { get; set; }
        public int BancoId { get; set; }
        public int TipoCNABId { get; set; }
        public int TipoBoletoId { get; set; }
        public bool EhValido { get; set; }
        public DateTime De { get; set; }
        public DateTime Ate { get; set; }
    }
}
