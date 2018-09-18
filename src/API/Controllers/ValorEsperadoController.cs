using API.ControllerBaseExtensions;
using Application.AppService.ValorEsperado;
using Application.ViewModel.Request;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Produces("application/json")]
    public class ValorEsperadoController : ApiController
    {
        private readonly IValorEsperadoAppService _valorEsperadoAppService;

        public ValorEsperadoController(IValorEsperadoAppService valorEsperadoAppService)
        {
            _valorEsperadoAppService = valorEsperadoAppService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var valorEsperado = _valorEsperadoAppService.GetAll();
            return Response(valorEsperado);
        }

        [HttpGet("GetById")]
        public IActionResult GetById(int id)
        {
            var valorEsperado = _valorEsperadoAppService.GetById(id);
            return Response(valorEsperado);
        }

        [HttpPost]
        public IActionResult Post([FromBody]ValorEsperadoRequest valorEsperado)
        {
            var response = _valorEsperadoAppService.Inserir(valorEsperado);
            return Response(response);
        }

        [HttpPut]
        public IActionResult Put([FromBody]ValorEsperadoRequest valorEsperado)
        {
            var response = _valorEsperadoAppService.Alterar(valorEsperado);
            return Response(response);
        }

        [HttpDelete]
        public IActionResult Delete([FromBody]ValorEsperadoRequest valorEsperado)
        {
            _valorEsperadoAppService.Excluir(valorEsperado);
            return Response();
        }
    }
}