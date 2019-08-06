using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.CodeAnalysis;
using Microsoft.EntityFrameworkCore;

namespace ReactDemo.Db
{
    public class OceanicDbContext : DbContext
    {
        public OceanicDbContext() { }

        public OceanicDbContext(DbContextOptions<OceanicDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Location> Location { get; set; }
        public virtual DbSet<Route> Route { get; set; }
        public virtual DbSet<ProductType> ProductType { get; set; }
        public virtual DbSet<WeightCostSetting> WeightCostSettings { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(@"Server=localhost;Database=Oceanic;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Location>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Code).IsRequired();
            });

            modelBuilder.Entity<Route>(entity =>
            {
                entity.HasKey(x => new { x.DepartureLocationId, x.DestinationLocationId });

                entity.HasOne(e => e.DepartureLocation)
                    .WithMany(l => l.FromLocations)
                    .HasForeignKey(e => e.DepartureLocationId);

                entity.HasOne(e => e.DestinationLocation)
                    .WithMany(l => l.ToLocations)
                    .HasForeignKey(e => e.DestinationLocationId);
            });

            modelBuilder.Entity<ProductType>(entity =>
            {
                entity.HasKey(x => x.Id);
            });

            modelBuilder.Entity<WeightCostSetting>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.Property(x => x.WeightFrom).IsRequired();
                entity.Property(x => x.WeightTo).IsRequired();
                entity.Property(x => x.Cost).IsRequired();
            });
        }
    }
}
