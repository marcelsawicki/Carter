using Microsoft.Extensions.Configuration;

namespace ReshopApp.Services
{
    public class UserService : IUserService
    {
        private readonly IConfiguration _configuration;
        public UserService(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public bool CheckPasswordSignIn(string username, string password)
        {
            var adminPassword = _configuration.GetValue<string>("AdminPassword");
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
                return false;

            if (password == adminPassword)
            {
                return true;
            }

            return false;
        }
    }
}
