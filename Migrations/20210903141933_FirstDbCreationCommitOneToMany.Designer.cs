﻿// <auto-generated />
using System;
using EpicGames.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace EpicGames.Migrations
{
    [DbContext(typeof(GameDbContext))]
    [Migration("20210903141933_FirstDbCreationCommitOneToMany")]
    partial class FirstDbCreationCommitOneToMany
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.9")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("EpicGames.Models.Product.Addon", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("Id")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("GameId")
                        .HasColumnType("int");

                    b.Property<bool>("IsWished")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(500)
                        .HasColumnType("nvarchar(500)");

                    b.Property<byte[]>("PrimaryAvatar")
                        .IsRequired()
                        .HasMaxLength(5120)
                        .HasColumnType("varbinary(5120)");

                    b.Property<int?>("Sale")
                        .HasColumnType("int");

                    b.Property<byte[]>("SecondaryAvatar")
                        .IsRequired()
                        .HasMaxLength(5120)
                        .HasColumnType("varbinary(5120)");

                    b.Property<string>("SourceLink")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("GameId");

                    b.ToTable("Addons");
                });

            modelBuilder.Entity("EpicGames.Models.Product.Edition", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("Id")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("GameId")
                        .HasColumnType("int");

                    b.Property<bool>("IsWished")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(500)
                        .HasColumnType("nvarchar(500)");

                    b.Property<float>("Price")
                        .HasColumnType("real");

                    b.Property<int?>("Sale")
                        .HasColumnType("int");

                    b.Property<string>("SourceLink")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("GameId");

                    b.ToTable("Editions");
                });

            modelBuilder.Entity("EpicGames.Models.Product.Game", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Developer")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.Property<string>("GameplayVideoSource")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsWished")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(500)
                        .HasColumnType("nvarchar(500)");

                    b.Property<float>("Price")
                        .HasColumnType("real");

                    b.Property<byte[]>("PrimaryAvatar")
                        .IsRequired()
                        .HasMaxLength(5120)
                        .HasColumnType("varbinary(5120)");

                    b.Property<string>("Publisher")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.Property<DateTime>("ReleaseDate")
                        .HasColumnType("datetime2");

                    b.Property<int?>("Sale")
                        .HasColumnType("int");

                    b.Property<byte[]>("SecondaryAvatar")
                        .IsRequired()
                        .HasMaxLength(5120)
                        .HasColumnType("varbinary(5120)");

                    b.Property<string>("SourceLink")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Version")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.ToTable("Games");
                });

            modelBuilder.Entity("EpicGames.Models.Product.Platform", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("Id")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("GameId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("PlatformName");

                    b.HasKey("Id");

                    b.HasIndex("GameId");

                    b.ToTable("Platforms");
                });

            modelBuilder.Entity("EpicGames.Models.Product.ScreenShot", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("GameId")
                        .HasColumnType("int");

                    b.Property<byte[]>("Image")
                        .HasMaxLength(5120)
                        .HasColumnType("varbinary(5120)");

                    b.HasKey("Id");

                    b.HasIndex("GameId");

                    b.ToTable("ScreenShots");
                });

            modelBuilder.Entity("EpicGames.Models.Product.SystemRequirement", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("Id")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Additionals")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DirectXVersion")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("GameId")
                        .HasColumnType("int");

                    b.Property<string>("Language")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("OS")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Processor")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RAM")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Storage")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("VideoCard")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("GameId");

                    b.ToTable("SystemRequirements");
                });

            modelBuilder.Entity("EpicGames.Models.Product.Addon", b =>
                {
                    b.HasOne("EpicGames.Models.Product.Game", "Game")
                        .WithMany("Addons")
                        .HasForeignKey("GameId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Game");
                });

            modelBuilder.Entity("EpicGames.Models.Product.Edition", b =>
                {
                    b.HasOne("EpicGames.Models.Product.Game", "Game")
                        .WithMany("Editions")
                        .HasForeignKey("GameId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Game");
                });

            modelBuilder.Entity("EpicGames.Models.Product.Platform", b =>
                {
                    b.HasOne("EpicGames.Models.Product.Game", "Game")
                        .WithMany("Platforms")
                        .HasForeignKey("GameId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Game");
                });

            modelBuilder.Entity("EpicGames.Models.Product.ScreenShot", b =>
                {
                    b.HasOne("EpicGames.Models.Product.Game", "Game")
                        .WithMany("ScreenShots")
                        .HasForeignKey("GameId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Game");
                });

            modelBuilder.Entity("EpicGames.Models.Product.SystemRequirement", b =>
                {
                    b.HasOne("EpicGames.Models.Product.Game", "Game")
                        .WithMany("SystemRequirements")
                        .HasForeignKey("GameId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Game");
                });

            modelBuilder.Entity("EpicGames.Models.Product.Game", b =>
                {
                    b.Navigation("Addons");

                    b.Navigation("Editions");

                    b.Navigation("Platforms");

                    b.Navigation("ScreenShots");

                    b.Navigation("SystemRequirements");
                });
#pragma warning restore 612, 618
        }
    }
}
