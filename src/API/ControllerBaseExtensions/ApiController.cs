using Microsoft.AspNetCore.Mvc;

namespace API.ControllerBaseExtensions
{
    public abstract class ApiController : ControllerBase
    {
        protected bool IsValidOperation()
        {
            //return (!_notifications.HasNotifications());

            return true;
        }

        protected new IActionResult Response(object result = null)
        {
            if (IsValidOperation())
            {
                return Ok(new
                {
                    success = true,
                    data = result
                });
            }

            return BadRequest(new
            {
                success = false,
                //errors = _notifications.GetNotifications().Select(n => n)
                erros = ""
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
