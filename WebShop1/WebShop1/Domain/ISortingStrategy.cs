using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebShop1.Domain
{
    public interface ISortingStrategy
    {
        void Sort<T>(List<T> dataToSort);
    }
}
