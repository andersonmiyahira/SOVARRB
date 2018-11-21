using Application.ViewModel.RequestValidations;
using FluentValidation.Results;

namespace Application.ViewModel.Request
{
    public class BancoRequest
    {
        public int Id { get; set; }
        public string Descricao { get; set; }
        public bool Ativo { get; set; }

        public ValidationResult ValidationResult { get; set; }

        public bool IsValid()
        {
            var result = new BancoRequestValidator().Validate(this);
            ValidationResult = result;

            return result.IsValid;
        }
    }
}
