using System.Collections.Generic;
using API.ControllerBaseExtensions;
using Application.AppService.Banco;
using Application.AppService.Importacao;
using Application.ViewModel.Request;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Produces("application/json")]
    public class ImportarArquivoController : ApiController
    {
        private readonly IArquivoAppService _importacaoAppService;
        private readonly IBancoAppService _bancoAppService;

        public ImportarArquivoController(IBancoAppService bancoAppService)
        {
            //_importacaoAppService = importacaoAppService;
            _bancoAppService = bancoAppService;
        }

        [HttpPost]
        [Route("File")]
        public IActionResult PostFile(int bancoId, List<IFormFile> formFile)
        {
            List<ArquivoImportacao> files = new List<ArquivoImportacao>();
            formFile.ForEach(f => {
                files.Add(new ArquivoImportacao()
                {
                    Name = f.Name,
                    File = f.OpenReadStream()
                });
            });

            //_importacaoAppService.ProcessarArquivo(files);
            _bancoAppService.ProcessarArquivo(files);
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