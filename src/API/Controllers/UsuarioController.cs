using API.ControllerBaseExtensions;
using Application.AppService.ValorEsperado;
using Application.ViewModel.Request;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Produces("application/json")]
    public class UsuarioController : ApiController
    {

        private readonly IUsuarioAppService _usuarioAppService;

        public UsuarioController(IUsuarioAppService usuarioAppService)
        {
            _usuarioAppService = usuarioAppService;
        }

        /// <summary>
        /// Create new user
        /// </summary>
        /// <param name="usuarioRequest"></param>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpPost]
        public IActionResult Post([FromBody]UsuarioRequest usuarioRequest)
        {
            var response = _usuarioAppService.CadastrarUsuario(usuarioRequest);
            return Response(response);
        }

    }
}