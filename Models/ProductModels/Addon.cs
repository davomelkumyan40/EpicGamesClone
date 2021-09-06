using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EpicGames.Models.ProductModels
{
    [Table("Addons")]
    public class Addon
    {
        [Key]
        [Column("Id")]
        public int Id { get; set; }
        [MaxLength(500)]
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        public int? Sale { get; set; }
        [Required]
        public string SourceLink { get; set; }
        [Required]
        public bool IsWished { get; set; }
        [Required]
        [MaxLength(5120)]
        public byte[] PrimaryAvatar { get; set; }
        [Required]
        [MaxLength(5120)]
        public byte[] SecondaryAvatar { get; set; }

        [ForeignKey("Game")]
        public int GameId { get; set; }
        public Game Game { get; set; }
    }
}
