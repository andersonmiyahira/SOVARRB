using FluentValidation.Results;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace API.ControllerBaseExtensions
{
    public abstract class ApiController : ControllerBase
    { 
        protected new IActionResult Response(object result = null)
        {
            ValidationResult validation = (ValidationResult)result?.GetType().GetProperty("ValidationResult")?.GetValue(result, null);
            if (validation != null && !validation.IsValid)
                return Response(validation);

            return Ok(new
            {
                success = true,
                data = result
            });
        }

        protected new IActionResult Response(ValidationResult result)
        {
            return BadRequest(new
            {
                success = false,
                errors = result.Errors.Select(_ => _.ErrorMessage)
            });
        }


        private string StringUserId => User.FindFirst("UserId")?.Value ?? "0";
        private string Admin => User.FindFirst(type: "EhAdm")?.Value;

        public bool EhAdm {
            get
            {
                return bool.Parse(Admin);
            }
        }

        public int IdUsuarioLogado {
            get
            {
                if(!string.IsNullOrEmpty(StringUserId))
                    return int.Parse(StringUserId);
                return 0;
            }
        }
    }
}
