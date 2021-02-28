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
            travelCollection.Add(new Travel { Id = 1, Date = dateTime, Price = 2, Name = "backpack", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 2, Date = dateTime, Price = 2, Name = "beanie", Picture = @".\images\travel-accessories\002-beanie.png" });
            travelCollection.Add(new Travel { Id = 3, Date = dateTime, Price = 2, Name = "belt", Picture = @".\images\travel-accessories\003-belt.png" });
            travelCollection.Add(new Travel { Id = 4, Date = dateTime, Price = 2, Name = "binocular", Picture = @".\images\travel-accessories\004-binocular.png" });
            travelCollection.Add(new Travel { Id = 5, Date = dateTime, Price = 2, Name = "bottle", Picture = @".\images\travel-accessories\005-bottle.png" });
            travelCollection.Add(new Travel { Id = 6, Date = dateTime, Price = 2, Name = "camera", Picture = @".\images\travel-accessories\006-camera.png" });
            travelCollection.Add(new Travel { Id = 7, Date = dateTime, Price = 2, Name = "comb", Picture = @".\images\travel-accessories\007-comb.png" });
            travelCollection.Add(new Travel { Id = 8, Date = dateTime, Price = 2, Name = "compass", Picture = @".\images\travel-accessories\008-compass.png" });
            travelCollection.Add(new Travel { Id = 9, Date = dateTime, Price = 2, Name = "laptop", Picture = @".\images\travel-accessories\009-laptop.png" });
            travelCollection.Add(new Travel { Id = 10, Date = dateTime, Price = 1, Name = "eyeglass", Picture = @".\images\travel-accessories\010-eyeglass.png" });
            travelCollection.Add(new Travel { Id = 11, Date = dateTime, Price = 1, Name = "flag", Picture = @".\images\travel-accessories\011-flag.png" });
            travelCollection.Add(new Travel { Id = 12, Date = dateTime, Price = 1, Name = "flashlight", Picture = @".\images\travel-accessories\012-flashlight.png" });
            travelCollection.Add(new Travel { Id = 13, Date = dateTime, Price = 1, Name = "bag", Picture = @".\images\travel-accessories\013-bag.png" });
            travelCollection.Add(new Travel { Id = 14, Date = dateTime, Price = 1, Name = "hat", Picture = @".\images\travel-accessories\014-hat.png" });
            travelCollection.Add(new Travel { Id = 15, Date = dateTime, Price = 1, Name = "key", Picture = @".\images\travel-accessories\015-key.png" });
            travelCollection.Add(new Travel { Id = 16, Date = dateTime, Price = 1, Name = "knife", Picture = @".\images\travel-accessories\016-knife.png" });
            travelCollection.Add(new Travel { Id = 17, Date = dateTime, Price = 1, Name = "life saver", Picture = @".\images\travel-accessories\017-life saver.png" });
            travelCollection.Add(new Travel { Id = 18, Date = dateTime, Price = 1, Name = "lighter", Picture = @".\images\travel-accessories\018-lighter.png" });
            travelCollection.Add(new Travel { Id = 19, Date = dateTime, Price = 1, Name = "map", Picture = @".\images\travel-accessories\019-map.png" });
            travelCollection.Add(new Travel { Id = 20, Date = dateTime, Price = 1, Name = "luggage", Picture = @".\images\travel-accessories\020-luggage.png" });
            travelCollection.Add(new Travel { Id = 21, Date = dateTime, Price = 1, Name = "medicine", Picture = @".\images\travel-accessories\021-medicine.png" });
            travelCollection.Add(new Travel { Id = 22, Date = dateTime, Price = 1, Name = "mobile", Picture = @".\images\travel-accessories\022-mobile.png" });
            travelCollection.Add(new Travel { Id = 23, Date = dateTime, Price = 1, Name = "money", Picture = @".\images\travel-accessories\023-money.png" });
            travelCollection.Add(new Travel { Id = 24, Date = dateTime, Price = 1, Name = "passport", Picture = @".\images\travel-accessories\024-passport.png" });
            travelCollection.Add(new Travel { Id = 25, Date = dateTime, Price = 1, Name = "nail polish", Picture = @".\images\travel-accessories\025-nail polish.png" });
            travelCollection.Add(new Travel { Id = 26, Date = dateTime, Price = 1, Name = "pills", Picture = @".\images\travel-accessories\026-pills.png" });
            travelCollection.Add(new Travel { Id = 27, Date = dateTime, Price = 1, Name = "razor", Picture = @".\images\travel-accessories\027-razor.png" });
            travelCollection.Add(new Travel { Id = 28, Date = dateTime, Price = 1, Name = "sandal", Picture = @".\images\travel-accessories\028-sandal.png" });
            travelCollection.Add(new Travel { Id = 29, Date = dateTime, Price = 1, Name = "shirt", Picture = @".\images\travel-accessories\029-shirt.png" });
            travelCollection.Add(new Travel { Id = 30, Date = dateTime, Price = 1, Name = "shoes", Picture = @".\images\travel-accessories\030-shoes.png" });
            travelCollection.Add(new Travel { Id = 31, Date = dateTime, Price = 1, Name = "short", Picture = @".\images\travel-accessories\031-short.png" });
            travelCollection.Add(new Travel { Id = 32, Date = dateTime, Price = 1, Name = "diving mask", Picture = @".\images\travel-accessories\032-diving mask.png" });
            travelCollection.Add(new Travel { Id = 33, Date = dateTime, Price = 1, Name = "suitcase", Picture = @".\images\travel-accessories\033-suitcase.png" });
            travelCollection.Add(new Travel { Id = 34, Date = dateTime, Price = 1, Name = "sun cream", Picture = @".\images\travel-accessories\034-sun cream.png" });
            travelCollection.Add(new Travel { Id = 35, Date = dateTime, Price = 1, Name = "swim", Picture = @".\images\travel-accessories\035-swim.png" });
            travelCollection.Add(new Travel { Id = 36, Date = dateTime, Price = 1, Name = "swimsuit", Picture = @".\images\travel-accessories\036-swimsuit.png" });
            travelCollection.Add(new Travel { Id = 37, Date = dateTime, Price = 1, Name = "thermometer", Picture = @".\images\travel-accessories\037-thermometer.png" });
            travelCollection.Add(new Travel { Id = 38, Date = dateTime, Price = 1, Name = "ticket", Picture = @".\images\travel-accessories\038-ticket.png" });
            travelCollection.Add(new Travel { Id = 39, Date = dateTime, Price = 1, Name = "toothbrush", Picture = @".\images\travel-accessories\039-toothbrush.png" });
            travelCollection.Add(new Travel { Id = 40, Date = dateTime, Price = 1, Name = "towel", Picture = @".\images\travel-accessories\040-towel.png" });
            travelCollection.Add(new Travel { Id = 41, Date = dateTime, Price = 1, Name = "umbrella", Picture = @".\images\travel-accessories\041-umbrella.png" });
            travelCollection.Add(new Travel { Id = 42, Date = dateTime, Price = 1, Name = "knife", Picture = @".\images\travel-accessories\042-knife.png" });
            travelCollection.Add(new Travel { Id = 43, Date = dateTime, Price = 1, Name = "vest", Picture = @".\images\travel-accessories\043-vest.png" });
            travelCollection.Add(new Travel { Id = 44, Date = dateTime, Price = 1, Name = "wallet", Picture = @".\images\travel-accessories\044-wallet.png" });
            travelCollection.Add(new Travel { Id = 45, Date = dateTime, Price = 1, Name = "watch", Picture = @".\images\travel-accessories\045-watch.png" });

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
