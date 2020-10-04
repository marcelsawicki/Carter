using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WebShop.Model
{
    public class EFCoreWebShopContext : DbContext
    {
        public EFCoreWebShopContext(DbContextOptions<EFCoreWebShopContext> options): base(options)
        {

        }
        public DbSet<Board> Boards { get; set; }
    }
}
