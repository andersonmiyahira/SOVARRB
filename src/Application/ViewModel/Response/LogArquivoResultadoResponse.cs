using System;
using System.Collections.Generic;
using System.Text;

namespace Application.ViewModel.Response
{
    public class LogArquivoResultadoResponse
    {
        public LogArquivoResultadoResponse()
        {
            Resultado = new List<ResultadoProcessamentoResponse>();
        }

        public int IdArquivo { get; set; }
        public string NomeArquivo { get; set; }
        public List<ResultadoProcessamentoResponse> Resultado { get; set; }
    } 
}
