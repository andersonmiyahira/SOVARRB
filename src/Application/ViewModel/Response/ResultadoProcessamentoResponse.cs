using System;
using System.Collections.Generic;
using System.Text;

namespace Application.ViewModel.Response
{
    public class ResultadoProcessamentoResponse
    {
        /// <summary>
        /// 1 - Header, 2 - Detalhe, 3 - Footer
        /// </summary>
        public int Tipo { get; set; }
        public string Mensagem { get; set; }
        public bool EhValido { get; set; }
    }
}
