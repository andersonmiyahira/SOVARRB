using API.ControllerBaseExtensions;
using Application.AppService.Banco;
using Application.ViewModel.Filters;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Net;

namespace API.Controllers
{
    [Produces("application/json")]
    public class ArquivoController : ApiController
    {
        private readonly IArquivoAppService _arquivoAppService;

        public ArquivoController(IArquivoAppService arquivoAppService)
        {
            _arquivoAppService = arquivoAppService;
        }

        [HttpGet]
        public IActionResult GetByFilters(ArquivoFilter filter)
        { 
            if(!EhAdm) filter.UsuarioId = IdUsuarioLogado;

            var response = _arquivoAppService.ObterComFiltros(filter);
            return Response(response);
        }

        [HttpGet("Download")]
        public IActionResult Download(int id)
        {
            var fileBytes = _arquivoAppService.Download(id);
            if (fileBytes == null)
                return Response(HttpStatusCode.NotFound);

            return Response(fileBytes);
        }
    }
}