using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using WebApplication3.Model;

namespace WebApplication3.Controllers
{
    public class AccountController : Controller
    {
        public IConfiguration Configuration { get; }
        public AccountController(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public IActionResult Index()
        {
            return null;
        }
        
        [HttpPost]
        public IActionResult Login([FromBody] UserCredentials usercredentials)

        {
            try
            {
                string usrLogin = Configuration["UserDev:Login"];
                string usrPassword = Configuration["UserDev:Password"];

                if ((usercredentials.Login.ToLower() == usrLogin) && (usercredentials.Password == usrPassword))
                {
                    var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, usercredentials.Login)
                };

                    var identity = new ClaimsIdentity(
                        claims, CookieAuthenticationDefaults.AuthenticationScheme
                        );
                    var principal = new ClaimsPrincipal(identity);
                    var props = new AuthenticationProperties();
                    HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, principal, props).Wait();
                    var user = HttpContext.User.Identity.Name;
                    return Ok();

                }
                else
                {
                   return Unauthorized();
                }
            }
            catch
            {
                return BadRequest();
            }
        }


        [HttpGet]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync();
            return Ok();
        }
    }
}
