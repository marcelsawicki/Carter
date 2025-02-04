using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReshopApp.Models;
using ReshopApp.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace ReshopApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly ApplicationDbContext _context;
        public AccountController(IUserService userService, ApplicationDbContext context)
        {
            _userService = userService;
            _context = context;
        }

        [HttpPost]
        [Route("login")]
        public async Task<bool> Login([FromBody] User userCredentials)
        {
            bool isValid = false;
            try
            {
                var checkUser = _context.Users.Where(x=> x.Password==userCredentials.Password && x.IsActive==true).FirstOrDefault();
                if (checkUser!=null)
                {
                    if(checkUser.Password==userCredentials.Password) 
                    {
                        isValid = true;
                    }
                }

                //var isValid = _userService.CheckPasswordSignIn(userCredentials.Login, userCredentials.Password);

                //if (!isValid)
                //    return false;

                var authProperties = new AuthenticationProperties
                {
                    IsPersistent = false,
                };

                var claims = new List<Claim> {
                    new Claim(ClaimTypes.NameIdentifier, "testUserId")
                };

                var userIdentity = new ClaimsIdentity(claims, "webuser");
                var userPrincipal = new ClaimsPrincipal(userIdentity);

                await HttpContext.SignInAsync(
                    CookieAuthenticationDefaults.AuthenticationScheme,
                    userPrincipal,
                    authProperties);
                return isValid;
            }
            catch (Exception ex)
            {
                var message = ex.Message;
                return false;
            }
        }
        [HttpPost]
        [Route("register")]
        public async Task<bool> Register([FromBody] User userCredentials)
        {
            _context.Users.Add(userCredentials);
            _context.SaveChanges();

            return await Task.FromResult(true);
        }

        [HttpGet]
        [Route("logout")]
        public async Task Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
        }

        [HttpGet]
        [Route("health")]
        public async Task<string> Healthcheck()
        {
            return "okdddd";
        }
    }
}
