using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EpicGames.Models.ProductModels
{
    [Table("ScreenShots")]
    public class ScreenShot
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(5120)]
        public byte[] Image { get; set; }

        [ForeignKey("Game")]
        public int GameId { get; set; }
        public Game Game { get; set; }
    }
}
