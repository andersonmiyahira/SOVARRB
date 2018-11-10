using API.ControllerBaseExtensions;
using Application.AppService.Banco;
using Application.ViewModel.Request;
using Microsoft.AspNetCore.Authorization;
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
        [AllowAnonymous]
        public IActionResult Get()
        {
            var bancos = _bancoAppService.ObterTodosBancos();
            return Response(bancos);
        }

        [HttpGet("GetById")]
        [AllowAnonymous]
        public IActionResult GetById(int id)
        {
            var bancos = _bancoAppService.ObterPorId(id);
            return Response(bancos);
        }

        [Authorize(Roles = "ADMIN")]
        [HttpPost]
        public IActionResult Post([FromBody]BancoRequest banco)
        {
            var bancos = _bancoAppService.Salvar(banco);
            return Response(bancos);
        }

        [Authorize(Roles = "ADMIN")]
        [HttpDelete]
        public IActionResult Delete(int id)
        {
             _bancoAppService.Excluir(id);
            return Response();
        }
    }
}