using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebShop1.Domain;

namespace WebShop1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StrategyController : ControllerBase
    {


        [HttpGet]
        public IEnumerable<string> Get()
        {
            ISortingStrategy sortingStrategy = null;
 
            List<string> voivodeshipResidence = new List<string> { "ab", "ac", "xa", "td" };
            sortingStrategy = GetSortingOption(ObjectToSort.Surname);
            sortingStrategy.Sort(voivodeshipResidence);

            List<int> studentNumbers = new List<int> { 123456, 9876543, 345432 };
            sortingStrategy = GetSortingOption(ObjectToSort.Book);
            sortingStrategy.Sort(studentNumbers);

            List<string> cityCartNumbers = new List<string> { "A123456", "B9876543","C345432" };
            sortingStrategy = GetSortingOption(ObjectToSort.CityCard);
            sortingStrategy.Sort(cityCartNumbers);
            return null;
        }

        private static ISortingStrategy GetSortingOption(ObjectToSort objectToSort)
        {
            ISortingStrategy sortingStrategy = null;
            switch (objectToSort)
            {
                case ObjectToSort.Book:
                    sortingStrategy = new MergeSort();
                    break;
                case ObjectToSort.CityCard:
                    sortingStrategy = new HeapSort();
                    break;
                case ObjectToSort.Surname:
                    sortingStrategy = new QuickSort();
                    break;
                default:
                    break;
            }
            return sortingStrategy;
        }
    }
}
