using API.ControllerBaseExtensions;
using Application.AppService.Banco;
using Application.ViewModel.Request;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Produces("application/json")]
    public class BancoController : ApiController
    {
        private readonly IBancoAppService _bancoAppService;

        public BancoController(IBancoAppService bancoAppService)
        {
            this._bancoAppService = bancoAppService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var bancos = _bancoAppService.ObterTodosBancos();
            return Response(bancos);
        }

        [HttpGet("GetById")]
        public IActionResult GetById(int id)
        {
            var bancos = _bancoAppService.ObterPorId(id);
            return Response(bancos);
        }

        [HttpPost]
        public IActionResult Post([FromBody]BancoRequest banco)
        {
            var bancos = _bancoAppService.Salvar(banco);
            return Response(bancos);
        } 

        [HttpDelete]
        public IActionResult Delete(int id)
        {
             _bancoAppService.Excluir(id);
            return Response();
        }
    }
}