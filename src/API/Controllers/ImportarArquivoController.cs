using System.Collections.Generic;
using API.ControllerBaseExtensions;
using Application.AppService.Banco;
using Application.ViewModel.Request;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Produces("application/json")]
    public class ImportarArquivoController : ApiController
    {
        private readonly IArquivoAppService _arquivoAppService;
 
        public ImportarArquivoController(IArquivoAppService arquivoAppService)
        {
            _arquivoAppService = arquivoAppService;
        }

        [HttpPost]
        [Route("File")]
        public IActionResult PostFile(int bancoId, List<IFormFile> formFile)
        { 
            _arquivoAppService.ProcessarArquivo(new ImportarRequest(bancoId, formFile));
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