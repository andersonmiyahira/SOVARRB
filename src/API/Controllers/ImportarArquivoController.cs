using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Produces("application/json")]
    [Route("api/ImportarArquivo")]
    public class ImportarArquivoController : Controller
    {
        [HttpPost]
        [Route("File")]
        public IActionResult PostFile(int bancoId, IFormFile formFile)
        {
            return Ok();

            //if (file == null || file.Length <= 0)
            //{
                //NotifyError("400", "Arquivo inválido.");
              
            //}

            //var retorno = _uploadService.UploadFile(file);
            //if (!retorno.IsValid)
            //{
            //    NotifyError("400", retorno.Erro);
            //    return Response();
            //}

            //return Response(retorno);
        }
    }
}