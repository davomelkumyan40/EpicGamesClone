using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EpicGames.Models.ProductModels
{
    [Table("SystemRequirements")]
    public class SystemRequirement
    {
        [Key]
        [Column("Id")]
        public int Id { get; set; }
        [Required]
        public string OS { get; set; }
        [Required]
        public string Processor { get; set; }
        [Required]
        public string RAM { get; set; }
        [Required]
        public string Storage { get; set; }
        [Required]
        public string DirectXVersion { get; set; }
        [Required]
        public string VideoCard { get; set; }
        [Required]
        public string Language { get; set; }
        [Required]
        public string Additionals { get; set; }

        [ForeignKey("Game")]
        public int GameId { get; set; }
        public Game Game { get; set; }
    }
}
