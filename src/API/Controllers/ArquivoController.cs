using API.ControllerBaseExtensions;
using Application.AppService.Banco;
using Application.ViewModel.Filters;
using Microsoft.AspNetCore.Mvc;

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
            var response = _arquivoAppService.ObterComFiltros(filter);
            return Response(response);
        } 
    }
}