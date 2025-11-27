using AngularApp1.Server.Models;
using AngularApp1.Server.Repository;
using Azure.Core;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

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

                var claims = new[]
                {
                    new Claim(ClaimTypes.Name, user.Login)
                };
                
                var keyBytes = Convert.FromBase64String("4fJ2v8RzqL7y1nP0X5s8UvQ2tZ6bH3pFqYw9dGm1RkE=");
                var key = new SymmetricSecurityKey(keyBytes);
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(
                    issuer: "your-app",
                    audience: "your-app",
                    claims: claims,
                    expires: DateTime.UtcNow.AddHours(1),
                    signingCredentials: creds
                );

                string jwt = new JwtSecurityTokenHandler().WriteToken(token);

                Response.Cookies.Append("jwt", jwt, new CookieOptions
                {
                    HttpOnly = true,
                    Secure = true,
                    SameSite = SameSiteMode.Strict,
                    Path = "/"
                });

                return Ok("Logged in");
            }
            catch (Exception ex)
            {
                var message = ex.Message;
                return StatusCode(500, $"Internal server error: {message}");
            }
        }

        [HttpPost]
        [Route("logout")]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("jwt");
            return Ok();
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
