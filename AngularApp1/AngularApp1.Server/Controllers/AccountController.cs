using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using AngularApp1.Server.Models;
using Microsoft.AspNetCore.Authorization;
using AngularApp1.Server.Repository;

namespace AngularApp1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserRepository userRepository;
        public AccountController(UserRepository userRepository)
        {
            this.userRepository = userRepository;
        }

        [HttpGet("login")]
        public async Task<ActionResult<string>> Log()
        {
            return Ok("prosze sie zalogowac");
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] User userCredentials)
        {
            bool isValid = false;
            try
            {

                var user = userRepository.GetByUsernameAndPassword(userCredentials.Login, userCredentials.Password);
                if (user == null)
                    return Unauthorized();

                //if (userCredentials.Login == "user" && userCredentials.Password == "password")
                //{
                    isValid = true;


                    var authProperties = new AuthenticationProperties
                    {
                        IsPersistent = false,
                    };

                    var claims = new List<Claim> {
                    new Claim("sub", "1"),
                    new Claim("name", user.Login),
                    new Claim(ClaimTypes.NameIdentifier, "testUserId"),
                    new Claim(ClaimTypes.Name, "user"),
                    new Claim(ClaimTypes.Role, "User")  
                    };

                    var identity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
                    var principal = new ClaimsPrincipal(identity);

                    //await HttpContext.SignInAsync(
                    //    CookieAuthenticationDefaults.AuthenticationScheme,
                    //    principal,
                    //    authProperties);

                    await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme,
                        principal);
                    return Ok(new { success = true, login = userCredentials.Login });
                return Unauthorized("Invalid login or password");
            }
            catch (Exception ex)
            {
                var message = ex.Message;
                return StatusCode(500, $"Internal server error: {message}");
            }
        }

        [HttpPost]
        [Route("logout")]
        public async Task Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
        }

        [Authorize]
        [HttpGet("getuserclaims")]
        public IEnumerable<UserClaim> GetUserClaims()
        {
            var claims = new List<UserClaim>();
            foreach (var claim in User.Claims)
            {
                claims.Add(new UserClaim() { Type = claim.Type, Value = claim.Value });
            }

            return claims;
        }

        [Authorize]
        [HttpGet("whoami")]
        public IActionResult WhoAmI()
        {
            var roles = User.Claims.Where(c => c.Type == ClaimTypes.Role)
                        .Select(c => c.Value)
                        .ToList();

            return Ok(User.Identity?.Name ?? "Nie zalogowano");
        }


        [HttpGet("check-groups")]
        public IActionResult Groups()
        {
            var roles = User.Claims.Where(c => c.Type == ClaimTypes.Role)
                        .Select(c => c.Value)
                        .ToList();
            return Ok(new
            {
                User.Identity?.Name,
                Roles = roles
            });
        }

        [HttpGet("access-denied")]
        public IActionResult Access()
        {
            //return Forbid("access - denied");
            return StatusCode(403, new { message = "Brak dostępu" });
        }
    }
}
