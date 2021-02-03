using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication3.Model
{
    public class Book
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string Publishing { get; set; }
        public int Year { get; set; }

        public Book()
        {

        }
        public Book(string title)
        {
            this.Title = title;
        }
    }
}
