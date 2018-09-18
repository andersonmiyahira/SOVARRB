using System;

namespace Domain.Entities
{
    public class Usuario
    {
        public int IdUsuario { get; private set; }
        public string Nome { get; private set; }
        public string Email { get; private set; }
        public string Senha { get; private set; }
        public bool EhAdministrador { get; private set; }        
        public DateTime DataCadastro { get; private set; }
        public DateTime DataAlteracao { get; private set; }
        public bool Ativo { get; private set; }
    }
}
