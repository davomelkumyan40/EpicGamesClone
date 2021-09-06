using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EpicGames.Models.ProductModels
{
    [Table("Platforms")]
    public class Platform
    {
        [Key]
        [Column("Id")]
        public int Id { get; set; }
        [Required]
        [Column("PlatformName")]
        public string Name { get; set; }

        [ForeignKey("Game")]
        public int GameId { get; set; }
        public Game Game { get; set; }
    }
}
