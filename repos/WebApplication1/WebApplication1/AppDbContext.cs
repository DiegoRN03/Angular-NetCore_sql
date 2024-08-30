using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1
{
    public class AppDbContext: DbContext
    {

        DbSet<TarjetaCredito> TarjetaCredito { get; set; }
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {
        
        }
    }
}
