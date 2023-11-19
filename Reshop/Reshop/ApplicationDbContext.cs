using Microsoft.EntityFrameworkCore;
using ReshopApp.Models;

namespace ReshopApp
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

        public DbSet<User> Users { get; set; }
    }
}
