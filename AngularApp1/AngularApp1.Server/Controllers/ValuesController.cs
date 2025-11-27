using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AngularApp1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        //[Authorize(Roles = "User")]
        //[HttpGet]
        //public async Task<ActionResult<string>> GetSecretItem()
        //{
        //    var item = "secret item";
        //    return Ok(item);
        //}

        [Authorize]
        [HttpGet("secure-data")]
        public IActionResult SecureData()
        {
            return Ok(new { message = "sekretne dane" });
        }
    }
}
