using API.ControllerBaseExtensions;
using Application.AppService.Banco;
using Application.ViewModel.Request;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Net;

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
        [AllowAnonymous]
        public IActionResult PostFile([FromForm] ImportarRequest request)
        {
            request.UsuarioId = IdUsuarioLogado;

            var response = _arquivoAppService.ProcessarArquivo(request);
            return Ok(response);

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