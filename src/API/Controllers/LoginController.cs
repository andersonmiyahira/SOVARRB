using API.ControllerBaseExtensions;
using API.Models;
using Application.AppService.ValorEsperado;
using Application.ViewModel.Request;
using Application.ViewModel.Response;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Principal;

namespace API.Controllers
{
    [Produces("application/json")]
    public class LoginController : ApiController
    {
        private readonly IUsuarioAppService _usuarioAppService;
        private readonly SigningConfigurations _signingConfigurations;
        private readonly TokenConfigurations _tokenConfigurations;

        public LoginController(IUsuarioAppService usuarioAppService,
                               SigningConfigurations signingConfigurations,
                               TokenConfigurations tokenConfigurations)
        {

            _usuarioAppService = usuarioAppService;
            _signingConfigurations = signingConfigurations;
            _tokenConfigurations = tokenConfigurations;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Post([FromBody]UsuarioRequest usuario)
        {
            if (usuario == null || String.IsNullOrWhiteSpace(usuario.Email) || String.IsNullOrWhiteSpace(usuario.Senha))
            {
                return Response("Invalido");
            }

            UsuarioResponse usuarioValidoEncontrado = _usuarioAppService.EfetuarLogin(usuario);
            if(usuarioValidoEncontrado == null) return Response(new LoginResponse() { authenticated = false });

            ClaimsIdentity identity = new ClaimsIdentity(
                new GenericIdentity(usuarioValidoEncontrado.IdUsuario.ToString(), "Login"),
                new[] { 
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString("N")),
                        new Claim(JwtRegisteredClaimNames.UniqueName, usuarioValidoEncontrado.IdUsuario.ToString())
                }
            );

            Claim claimUserId = new Claim("UserId", usuarioValidoEncontrado.IdUsuario.ToString());
            Claim claimNome = new Claim(ClaimTypes.Name, usuarioValidoEncontrado.Nome);
            Claim claimEhAdm = new Claim(ClaimTypes.Role, usuarioValidoEncontrado.EhAdministrador ? "ADMIN" : "");

            string menu = "importar-arquivo|visualizar-arquivo";
            if (usuarioValidoEncontrado.EhAdministrador)
            {
                menu += "|banco|segmento|valor-esperado|layout|layout-cadastrar";
            }
            Claim claimMenu = new Claim("toolsAccess", menu);

            identity.AddClaim(claimUserId);
            identity.AddClaim(claimNome);
            identity.AddClaim(claimEhAdm);
            identity.AddClaim(claimMenu);

            DateTime dataCriacao = DateTime.Now;
            DateTime dataExpiracao = dataCriacao + TimeSpan.FromSeconds(_tokenConfigurations.Seconds);

            var handler = new JwtSecurityTokenHandler();
            var securityToken = handler.CreateToken(new SecurityTokenDescriptor
            {
                Issuer = _tokenConfigurations.Issuer,
                Audience = _tokenConfigurations.Audience,
                SigningCredentials = _signingConfigurations.SigningCredentials,
                Subject = identity,
                NotBefore = dataCriacao,
                Expires = dataExpiracao
            });
            var token = handler.WriteToken(securityToken);

            var response = new LoginResponse()
            {
                authenticated = true,
                created = dataCriacao.ToString("yyyy-MM-dd HH:mm:ss"),
                expiration = dataExpiracao.ToString("yyyy-MM-dd HH:mm:ss"),
                accessToken = token,
                message = "OK"
            };  

            return Response(response);
        }

    }
}