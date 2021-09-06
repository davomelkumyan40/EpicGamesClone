using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;


namespace EpicGames.Models.ProductModels
{
    [Table("Editions")]
    public class Edition
    {
        [Key]
        [Column("Id")]
        public int Id { get; set; }
        public int? Sale { get; set; }
        [Required]
        [MaxLength(500)]
        public string Name { get; set; }
        [Required]
        public float Price { get; set; }
        [Required]
        public string Description { get; set; }
        public bool IsWished { get; set; }
        [Required]
        public string SourceLink { get; set; }

        [ForeignKey("Game")]
        public int GameId { get; set; }
        public Game Game { get; set; }
    }
}
