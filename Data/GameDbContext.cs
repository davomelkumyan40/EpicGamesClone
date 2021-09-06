using EpicGames.Models.ProductModels;
using Microsoft.EntityFrameworkCore;

namespace EpicGames.Data
{
    public class GameDbContext : DbContext
    {
        public GameDbContext(DbContextOptions<GameDbContext> options)
            : base(options)
        {

        }

        public DbSet<Game> Games { get; set; }
        public DbSet<Addon> Addons { get; set; }
        public DbSet<Edition> Editions { get; set; }
        public DbSet<Platform> Platforms { get; set; }
        public DbSet<ScreenShot> ScreenShots { get; set; }
        public DbSet<SystemRequirement> SystemRequirements { get; set; }
    }
}
