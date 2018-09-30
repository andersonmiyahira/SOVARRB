using API.ControllerBaseExtensions;
using Application.AppService.Layout;
using Application.ViewModel.Filters;
using Application.ViewModel.Request;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Produces("application/json")]
    public class LayoutController : ApiController
    {
        private readonly ILayoutAppService _layoutAppService;

        public LayoutController(ILayoutAppService layoutAppService)
        {
            _layoutAppService = layoutAppService;
        }

        [HttpGet]
        public IActionResult Get(LayoutFilter filters)
        {
            var layout = _layoutAppService.ObterPorFiltro(filters);
            return Response(layout);
        }

        [HttpGet("GetById")]
        public IActionResult GetById(int id)
        {
            return Ok();

        }

        [HttpPost]
        public IActionResult Post()
        {
            return Ok();

        }

        [HttpPut]
        public IActionResult Put()
        {
            return Ok();

        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            _layoutAppService.Excluir(id);
            return Ok();

        }
    }
}