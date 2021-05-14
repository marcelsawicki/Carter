using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebApplication3.Model;

namespace WebApplication3.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FruitsController : ControllerBase
    {
        List<Travel> fruitCollection = new List<Travel>();
        DateTime dateTime = new DateTime();

        public FruitsController()
        {
           
        }

        [HttpGet]
        //[Authorize]
        public IEnumerable<Travel> Get()
        {
            return fruitCollection;
        }

        // GET: api/Fruit/5
        [HttpGet("{id}")]
        public Travel Get([FromRoute] int id)
        {
            return fruitCollection.Where(x => x.Id==id).FirstOrDefault();
        }
    }
}
