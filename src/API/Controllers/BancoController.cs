using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.AppService.Banco;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Produces("application/json")]
    [Route("api/Banco")]
    public class BancoController : Controller
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
            var bancos = _bancoAppService.GetAll();
            return Ok(bancos.ToList());
        }
    }
}