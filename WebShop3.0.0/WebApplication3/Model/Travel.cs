using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication3.Model
{

    public class Travel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Quantity { get; set; }
        public int Price { get; set; }
        public int PriceEUR { get; set; }
        public int PriceUSD { get; set; }
        public int PricePLN { get; set; }
        public string Picture { get; set; }
    }
}
