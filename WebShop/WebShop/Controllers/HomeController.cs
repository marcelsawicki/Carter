using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebShop.Model;

namespace WebShop.Controllers
{
    public class HomeController : Controller
    {
        private static readonly string[] Summaries = new[]
{
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        public IActionResult Index()
        {

            return Ok("Index");
        }

        public IActionResult Notlogged()
        {

            return Ok("Not logged");
        }

        [Authorize]
        public IEnumerable<WeatherForecast> Test()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }

        [HttpGet]
        public IActionResult Login(string login, string password)
        
        {
            try
            {
                if ((login.ToLower() == "admin") && (password == "123"))
                {
                    var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, login)
                };

                    var identity = new ClaimsIdentity(
                        claims, CookieAuthenticationDefaults.AuthenticationScheme
                        );
                    var principal = new ClaimsPrincipal(identity);
                    var props = new AuthenticationProperties();
                    HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, principal, props).Wait();
                    var user = HttpContext.User.Identity.Name;

                    return Ok("Logged in");

                }
                else
                {
                    return Unauthorized();
                }
            }
            catch
            {
                return Unauthorized();
            }
        }

        [HttpPost]
        public IActionResult Login([FromBody] Cred cred)

        {
            try
            {
                if ((cred.login.ToLower() == "admin") && (cred.password == "123"))
                {
                    var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, cred.login)
                };

                    var identity = new ClaimsIdentity(
                        claims, CookieAuthenticationDefaults.AuthenticationScheme
                        );
                    var principal = new ClaimsPrincipal(identity);
                    var props = new AuthenticationProperties();
                    HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, principal, props).Wait();
                    var user = HttpContext.User.Identity.Name;
                    return RedirectToAction("Test", "Home");

                }
                else
                {
                    return RedirectToAction("Notlogged", "Home");
                }
            }
            catch
            {
                return RedirectToAction("Notlogged", "Home");
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
