using API.ControllerBaseExtensions;
using Application.AppService.Layout;
using Application.ViewModel.Filters;
using Application.ViewModel.Request;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace API.Controllers
{
    [Authorize(Roles = "ADMIN")]
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
            var resp = _layoutAppService.GetById(id);
            return Response(resp);
        }

        [HttpPost]
        public IActionResult Post([FromBody]LayoutRequest layoutRequest)
        {
            var response = _layoutAppService.Inserir(layoutRequest);
            return Response(response);
        }

        [HttpPut]
        public IActionResult Put([FromBody]LayoutRequest layoutRequest)
        {
            _layoutAppService.AtualizarLayout(layoutRequest);
            var resp = _layoutAppService.ObterPorCodigo(layoutRequest.IdLayout);

            return Response(resp);
        }

        [HttpPost("SalvarVarios")]
        public IActionResult PostMany([FromBody]List<LayoutRequest> layoutRequest)
        {
            var response = _layoutAppService.Inserir(layoutRequest);
            return Response(response);
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            _layoutAppService.Excluir(id);
            return Ok();

        }
    }
}