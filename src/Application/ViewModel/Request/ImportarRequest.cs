using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using System.IO;

namespace Application.ViewModel.Request
{
    public class ImportarRequest
    {
        public int BancoId { get; set; }
        public int TipoCNABId { get; set; }
        public int TipoBoletoId { get; set; }
        public int UsuarioId { get; set; }
        public List<IFormFile> FormFiles { get; set; }        
    }   
}
