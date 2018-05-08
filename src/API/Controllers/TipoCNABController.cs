using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.AppService.Banco;
using Application.AppService.TipoCNAB;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Produces("application/json")]
    [Route("api/TipoCNAB")]
    public class TipoCNABController : Controller
    {
        private readonly ITipoCNABAppService _tipoCNABAppService;

        public TipoCNABController(ITipoCNABAppService tipoCNABAppService)
        {
            this._tipoCNABAppService = tipoCNABAppService;
        }

        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            var cnabs = _tipoCNABAppService.GetAll();
            return Ok(cnabs.ToList());
        }
    }
}