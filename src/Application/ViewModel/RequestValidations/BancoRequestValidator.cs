using Application.ViewModel.Request;
using FluentValidation;

namespace Application.ViewModel.RequestValidations
{
    public class BancoRequestValidator: AbstractValidator<BancoRequest>
    {
        public BancoRequestValidator()
        {
            RuleFor(x => x.Descricao)
              .NotEmpty().WithMessage("O descrição deve ser informado")
              .Length(3, 150).WithMessage("O campo nome deve ter entre 3 e 150 caracteres");
        }
    }
}
