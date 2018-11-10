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

        public string StringUserId => User.FindFirst("UserId")?.Value ?? "0";
    }
}
