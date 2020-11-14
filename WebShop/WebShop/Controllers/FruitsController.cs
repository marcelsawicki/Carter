using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebShop.Model;

namespace WebShop.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FruitsController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;

        public FruitsController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        //[Authorize]
        public IEnumerable<Fruit> Get()
        {
            var rng = new Random();
            List<Fruit> fruitCollection = new List<Fruit>();
            DateTime dateTime = new DateTime();

            fruitCollection.Add(new Fruit { Id = 1, Date = dateTime, Name="Orange", Picture= @".\images\fruits\001-orange.png" });
            fruitCollection.Add(new Fruit { Id = 2, Date = dateTime, Name = "Pear", Picture = @".\images\fruits\002-pear.png" });
            fruitCollection.Add(new Fruit { Id = 3, Date = dateTime, Name = "Melon", Picture = @".\images\fruits\003-melon.png" });
            fruitCollection.Add(new Fruit { Id = 4, Date = dateTime, Name = "Peanut", Picture = @".\images\fruits\004-peanut.png" });
            fruitCollection.Add(new Fruit { Id = 5, Date = dateTime, Name = "Banana", Picture = @".\images\fruits\005-banana.png" });
            fruitCollection.Add(new Fruit { Id = 6, Date = dateTime, Name = "Water melon", Picture = @".\images\fruits\006-Water melon.png" });
            fruitCollection.Add(new Fruit { Id = 7, Date = dateTime, Name = "Kiwi", Picture = @".\images\fruits\007-kiwi.png" });
            fruitCollection.Add(new Fruit { Id = 8, Date = dateTime, Name = "Pineapple", Picture = @".\images\fruits\008-pineapple.png" });
            fruitCollection.Add(new Fruit { Id = 9, Date = dateTime, Name = "Mango", Picture = @".\images\fruits\009-mango.png" });
            fruitCollection.Add(new Fruit { Id = 10, Date = dateTime, Name = "Grape", Picture = @".\images\fruits\010-grape.png" });
            fruitCollection.Add(new Fruit { Id = 11, Date = dateTime, Name = "Pomegrante", Picture = @".\images\fruits\011-pomegranate.png" });
            fruitCollection.Add(new Fruit { Id = 12, Date = dateTime, Name = "Lemon slice", Picture = @".\images\fruits\012-lemon slice.png" });
            fruitCollection.Add(new Fruit { Id = 13, Date = dateTime, Name = "Berry", Picture = @".\images\fruits\013-berry.png" });
            fruitCollection.Add(new Fruit { Id = 14, Date = dateTime, Name = "Pear", Picture = @".\images\fruits\014-pear.png" });
            fruitCollection.Add(new Fruit { Id = 15, Date = dateTime, Name = "Apple", Picture = @".\images\fruits\015-apple.png" });
            fruitCollection.Add(new Fruit { Id = 16, Date = dateTime, Name = "Lemon", Picture = @".\images\fruits\016-lemon.png" });
            fruitCollection.Add(new Fruit { Id = 17, Date = dateTime, Name = "Grapes", Picture = @".\images\fruits\017-grapes.png" });
            fruitCollection.Add(new Fruit { Id = 18, Date = dateTime, Name = "Plum", Picture = @".\images\fruits\018-plum.png" });
            fruitCollection.Add(new Fruit { Id = 19, Date = dateTime, Name = "Strawberry", Picture = @".\images\fruits\019-strawberry.png" });
            fruitCollection.Add(new Fruit { Id = 20, Date = dateTime, Name = "Coconut", Picture = @".\images\fruits\020-coconut.png" });
            fruitCollection.Add(new Fruit { Id = 21, Date = dateTime, Name = "Plum", Picture = @".\images\fruits\021-plum.png" });
            fruitCollection.Add(new Fruit { Id = 22, Date = dateTime, Name = "Avocado", Picture = @".\images\fruits\022-avocado.png" });
            fruitCollection.Add(new Fruit { Id = 23, Date = dateTime, Name = "Melon", Picture = @".\images\fruits\023-melon.png" });
            fruitCollection.Add(new Fruit { Id = 24, Date = dateTime, Name = "Berry", Picture = @".\images\fruits\024-berry.png" });

            return fruitCollection;
        }
    }
}
