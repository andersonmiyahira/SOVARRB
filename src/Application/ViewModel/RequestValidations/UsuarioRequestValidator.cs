using Application.ViewModel.Request;
using FluentValidation;

namespace Application.ViewModel.RequestValidations
{
    public class UsuarioRequestValidator : AbstractValidator<UsuarioRequest>
    {
        public UsuarioRequestValidator()
        {
            RuleFor(x => x.Nome)
               .NotEmpty().WithMessage("O campo nome deve ser informado")
               .Length(3, 150).WithMessage("O campo nome deve ter entre 3 e 150 caracteres");

            RuleFor(c => c.Email)
             .NotEmpty().WithMessage("O campo e-mail deve ser informado")
             .EmailAddress().WithMessage("E-mail inválido");

            RuleFor(c => c.Senha)
                .NotEmpty().WithMessage("Senha é obrigatória.")
                .Equal(c => c.ConfirmaSenha).WithMessage("A senha e confirmação de senha devem ser iguais.")
                .Length(3, 15).WithMessage("O campo senha deve ter entre 3 e 15 caracteres");
        }
    }
}
