using API.ControllerBaseExtensions;
using Application.AppService.Banco;
using Application.ViewModel.Request;
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
        [Route("Importar")]
        public IActionResult PostFile([FromForm] ImportarRequest request)
        {
            _arquivoAppService.ProcessarArquivo(request);
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