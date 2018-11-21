using Application.ViewModel.Request;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.ViewModel.RequestValidations
{
    public class LayoutRequestValidator : AbstractValidator<LayoutRequest>
    {
        public LayoutRequestValidator()
        {
            RuleFor(x => x.PosicaoAte)
                        .NotEmpty().WithMessage("O valor da posição até deve ser maior que 0");
        }
    }
}
