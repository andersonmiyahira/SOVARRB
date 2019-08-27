using FluentValidation.Results;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.EntitiesBase
{
    public class EntityBase
    {
        [NotMapped]
        public ValidationResult ValidationResult { get; protected set; }

        public void SetarValidationResultErrors(ValidationFailure failure)
        {
            if (ValidationResult == null) ValidationResult = new ValidationResult();
            ValidationResult.Errors.Add(failure);
        }
    }
}
