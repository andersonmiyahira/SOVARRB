using System;

namespace Application.ViewModel.Response
{
    public class UsuarioResponse
    {
        public int IdUsuario { get; set; }
        public string Nome { get; set; }
        public bool EhAdministrador { get; set; }
    }
}
