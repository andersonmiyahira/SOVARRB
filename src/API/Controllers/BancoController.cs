using System;
using System.Collections.Generic;
using System.Linq;
using API.ControllerBaseExtensions;
using Application.AppService.Banco;
using Application.ViewModel.Request;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Produces("application/json")]
    [Route("api")]
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
        public IActionResult Post([FromBody]Banco banco)
        {
            var bancos = _bancoAppService.Salvar(banco);
            return Response(bancos);
        } 

        [HttpDelete]
        public IActionResult Delete([FromBody]Banco banco)
        {
             _bancoAppService.Excluir(banco);
            return Response();
        }
    }
}