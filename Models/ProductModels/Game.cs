using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace EpicGames.Models.ProductModels
{
    [Table("Games")]
    public class Game
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(500)]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public float Price { get; set; }
        public int? Sale { get; set; }
        public IEnumerable<Edition> Editions { get; set; }
        public IEnumerable<Addon> Addons { get; set; }
        [Required]
        [MaxLength(200)]
        public string Developer { get; set; }
        [Required]
        [MaxLength(200)]
        public string Publisher { get; set; }
        [Required]
        public DateTime ReleaseDate { get; set; }
        public string GameplayVideoSource { get; set; }
        [Required]
        public IEnumerable<ScreenShot> ScreenShots { get; set; }
        [Required]
        [MaxLength(5120)] // could not be more than 5 MB
        public byte[] PrimaryAvatar { get; set; }
        [Required]
        [MaxLength(5120)] // could not be more than 5 MB
        public byte[] SecondaryAvatar { get; set; }
        public bool IsWished { get; set; }
        [Required]
        public string SourceLink { get; set; }
        [Required]
        public IEnumerable<Platform> Platforms { get; set; }
        public IEnumerable<SystemRequirement> SystemRequirements { get; set; }
        [Required]
        [MaxLength(50)] 
        public string Version { get; set; }

    }
}
