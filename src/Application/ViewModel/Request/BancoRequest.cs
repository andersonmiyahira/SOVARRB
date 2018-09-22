using System;

namespace Application.ViewModel.Request
{
    public class BancoRequest
    {
        public int Id { get; set; }
        public string Descricao { get; set; }
        public bool Ativo { get; set; }
    }
}
