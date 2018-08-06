using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.ControllerBaseExtensions;
using Application.AppService.Banco;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Produces("application/json")]
    [Route("api/Banco")]
    public class BancoController : ApiController
    {
        private readonly IBancoAppService _bancoAppService;

        public BancoController(IBancoAppService bancoAppService)
        {
            this._bancoAppService = bancoAppService;
        }

        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            var bancos = _bancoAppService.ObterTodosBancos();
            return Response(bancos);
        }
    }
}