using FBTarget.Models;
using Microsoft.EntityFrameworkCore;

namespace FBTarget
{
    public class AppDbContext : DbContext
    {
        public DbSet<TarjetaCredito> TarjetaCredito { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
    }
}
