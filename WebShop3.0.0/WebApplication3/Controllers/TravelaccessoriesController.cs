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
    public class TravelaccessoriesController : ControllerBase
    {
        List<Travel> travelCollection = new List<Travel>();
        DateTime dateTime = new DateTime();

        public TravelaccessoriesController()
        {
            travelCollection.Add(new Travel { Id = 1, Price = 1, PriceEUR = 0, PriceUSD = 1, PricePLN = 0, Name = "Mapa", Picture = @".\images\travel-accessories\booklet-icon.png" });
            travelCollection.Add(new Travel { Id = 2, Price = 1, PriceEUR = 0, PriceUSD = 1, PricePLN = 0, Name = "Namiot", Picture = @".\images\travel-accessories\dolly-icon.png" });
        }

        [HttpGet]
        //[Authorize]
        public IEnumerable<Travel> Get()
        {
            return travelCollection;
        }

        // GET: api/Fruit/5
        [HttpGet("{id}")]
        public Travel Get([FromRoute] int id)
        {
            return travelCollection.Where(x => x.Id==id).FirstOrDefault();
        }
    }
}
