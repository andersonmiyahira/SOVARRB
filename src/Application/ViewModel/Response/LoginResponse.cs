using FluentValidation.Results;

namespace Application.ViewModel.Response
{
    public class LoginResponse
    {
        public bool authenticated { get; set; }
        public string created { get; set; }
        public string expiration { get; set; }
        public string accessToken { get; set; }
        public string message { get; set; }

        public ValidationResult ValidationResult { get; set; }
    }
}
