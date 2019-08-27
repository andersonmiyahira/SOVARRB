using Application.ViewModel.RequestValidations;
using FluentValidation.Results;

namespace Application.ViewModel.Request
{
    public class UsuarioRequest
    {
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string ConfirmaSenha { get; set; }

        public ValidationResult ValidationResult { get; set; }

        public bool IsValid()
        {
            var result = new UsuarioRequestValidator().Validate(this);
            ValidationResult = result;

            return result.IsValid;
        }
    }
}
