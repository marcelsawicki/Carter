using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using AngularApp1.Server.Models;

namespace AngularApp1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        [HttpGet("login")]
        public async Task<ActionResult<string>> Log()
        {
            return Ok("prosze sie zalogowac");
        }

            [HttpPost]
        [Route("login")]
        public async Task<bool> Login([FromBody] User userCredentials)
        {
            bool isValid = false;
            try
            {
                if (userCredentials.Login == "user" && userCredentials.Password == "password")
                {
                    isValid = true;


                    var authProperties = new AuthenticationProperties
                    {
                        IsPersistent = false,
                    };

                    var claims = new List<Claim> {
                    new Claim(ClaimTypes.NameIdentifier, "testUserId"),
                    new Claim(ClaimTypes.Name, "user"),
                    //new Claim(ClaimTypes.Role, "Admin"),
                    new Claim(ClaimTypes.Role, "User")  
                    };

                    var userIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
                    var userPrincipal = new ClaimsPrincipal(userIdentity);

                    await HttpContext.SignInAsync(
                        CookieAuthenticationDefaults.AuthenticationScheme,
                        userPrincipal,
                        authProperties);
                }

                return isValid;
            }
            catch (Exception ex)
            {
                var message = ex.Message;
                return false;
            }
        }

        [HttpPost]
        [Route("logout")]
        public async Task Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
        }

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
