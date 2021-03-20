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
            travelCollection.Add(new Travel { Id = 1, Date = dateTime, Price = 1, PriceZK = 0, PriceSS = 1, PriceP = 0, Name = "Ciepły posiłek w gospodzie", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 2, Date = dateTime, Price = 2, PriceZK = 0, PriceSS = 10, PriceP = 0, Name = "Prywatny pokój na jedną noc", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 3, Date = dateTime, Price = 3, PriceZK = 0, PriceSS = 0, PriceP = 10, Name = "Wspólna izba na jedną noc", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 4, Date = dateTime, Price = 4, PriceZK = 4, PriceSS = 0, PriceP = 0, Name = "Koń pociągowy", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 5, Date = dateTime, Price = 0, PriceZK = 225, PriceSS = 0, PriceP = 0, Name = "Barka rzeczna", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 6, Date = dateTime, Price = 0, PriceZK = 75, PriceSS = 0, PriceP = 0, Name = "Wóz", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 7, Date = dateTime, Price = 0, PriceZK = 150, PriceSS = 0, PriceP = 0, Name = "Powóz", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 8, Date = dateTime, Price = 0, PriceZK = 0, PriceSS = 3, PriceP = 0, Name = "Tragarz - dniówka", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 9, Date = dateTime, Price = 0, PriceZK = 0, PriceSS = 9, PriceP = 0, Name = "Prawnik - dniówka", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 10, Date = dateTime, Price = 0, PriceZK = 20000, PriceSS = 0, PriceP = 0, Name = "Nieruchomość w Boegenhafen", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 11, Date = dateTime, Price = 0, PriceZK = 180, PriceSS = 0, PriceP = 0, Name = "Powóz + 2 konie wierzchowe", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 12, Date = dateTime, Price = 0, PriceZK = 15, PriceSS = 0, PriceP = 0, Name = "Pokój na miesiąc", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 13, Date = dateTime, Price = 0, PriceZK = 0, PriceSS = 16, PriceP = 0, Name = "Sztylet", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 14, Date = dateTime, Price = 0, PriceZK = 5, PriceSS = 0, PriceP = 0, Name = "Kusza", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 15, Date = dateTime, Price = 0, PriceZK = 0, PriceSS = 5, PriceP = 0, Name = "Bełt (12 szt.)", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 16, Date = dateTime, Price = 0, PriceZK = 0, PriceSS = 5, PriceP = 0, Name = "Strzała (12 szt.)", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 17, Date = dateTime, Price = 0, PriceZK = 3, PriceSS = 0, PriceP = 0, Name = "Kolczuga", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 18, Date = dateTime, Price = 0, PriceZK = 2, PriceSS = 0, PriceP = 0, Name = "Hełm", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 19, Date = dateTime, Price = 0, PriceZK = 10, PriceSS = 0, PriceP = 0, Name = "Nagolenniki płytowe", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 20, Date = dateTime, Price = 0, PriceZK = 0, PriceSS = 8, PriceP = 0, Name = "Beczka", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 21, Date = dateTime, Price = 0, PriceZK = 0, PriceSS = 1, PriceP = 0, Name = "Worek", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 22, Date = dateTime, Price = 0, PriceZK = 0, PriceSS = 5, PriceP = 0, Name = "Buty", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 23, Date = dateTime, Price = 0, PriceZK = 0, PriceSS = 6, PriceP = 0, Name = "Ubranie", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 24, Date = dateTime, Price = 0, PriceZK = 0, PriceSS = 2, PriceP = 6, Name = "Łom", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 25, Date = dateTime, Price = 0, PriceZK = 0, PriceSS = 2, PriceP = 6, Name = "Wiadro", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 26, Date = dateTime, Price = 0, PriceZK = 1, PriceSS = 0, PriceP = 0, Name = "Sierp", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 27, Date = dateTime, Price = 0, PriceZK = 0, PriceSS = 15, PriceP = 0, Name = "Wytrychy", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 28, Date = dateTime, Price = 0, PriceZK = 0, PriceSS = 10, PriceP = 0, Name = "Butelka wina", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 29, Date = dateTime, Price = 0, PriceZK = 0, PriceSS = 3, PriceP = 0, Name = "Beczułka piwa", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 30, Date = dateTime, Price = 0, PriceZK = 3, PriceSS = 0, PriceP = 0, Name = "Zestaw na zatrucia", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 31, Date = dateTime, Price = 0, PriceZK = 3, PriceSS = 0, PriceP = 0, Name = "Mapa", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 32, Date = dateTime, Price = 0, PriceZK = 20, PriceSS = 0, PriceP = 0, Name = "Księga, magia", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 33, Date = dateTime, Price = 0, PriceZK = 0, PriceSS = 1, PriceP = 0, Name = "Arkusz pergaminu", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 34, Date = dateTime, Price = 0, PriceZK = 80, PriceSS = 0, PriceP = 0, Name = "Warsztat", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 35, Date = dateTime, Price = 0, PriceZK = 3, PriceSS = 0, PriceP = 0, Name = "Narzędzia pracy", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 36, Date = dateTime, Price = 0, PriceZK = 2, PriceSS = 0, PriceP = 0, Name = "Pies myśliwski", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 37, Date = dateTime, Price = 0, PriceZK = 1, PriceSS = 0, PriceP = 0, Name = "Korzeń mandragory", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 38, Date = dateTime, Price = 0, PriceZK = 0, PriceSS = 18, PriceP = 0, Name = "Eliksir żywotności", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 39, Date = dateTime, Price = 0, PriceZK = 0, PriceSS = 10, PriceP = 0, Name = "Mikstura lecznicza", Picture = @".\images\travel-accessories\001-backpack.png" });
            travelCollection.Add(new Travel { Id = 40, Date = dateTime, Price = 0, PriceZK = 0, PriceSS = 7, PriceP = 6, Name = "Patelnia", Picture = @".\images\travel-accessories\001-backpack.png" });
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
