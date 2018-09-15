using Domain.Entities;
using Infra.Data.Mappings;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Infra.Data.Context
{
    public class SOVARRBContext : DbContext
    {
        public SOVARRBContext() { }

        public SOVARRBContext(DbContextOptions options)
            : base(options) { }

        public DbSet<Arquivo> Arquivo { get; set; }
        public DbSet<Banco> Bancos { get; set; }
        public DbSet<Layout> Layout { get; set; }
        public DbSet<LayoutValorEsperado> LayoutValorEsperado { get; set; }
        public DbSet<LogArquivo> LogArquivo { get; set; }
        public DbSet<Segmento> Segmento { get; set; }
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<ValorEsperado> ValorEsperado { get; set; }
        public DbSet<TipoCNAB> TipoCNAB { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ArquivoMap());
            modelBuilder.ApplyConfiguration(new BancoMap());
            modelBuilder.ApplyConfiguration(new LayoutMap());
            modelBuilder.ApplyConfiguration(new LayoutValoreEsperadoMap());
            modelBuilder.ApplyConfiguration(new LogArquivoMap());
            modelBuilder.ApplyConfiguration(new SegmentoMap());
            modelBuilder.ApplyConfiguration(new UsuarioMap());
            modelBuilder.ApplyConfiguration(new ValorEsperadoMap());
            modelBuilder.ApplyConfiguration(new TipoCNABMap());

            base.OnModelCreating(modelBuilder);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // get the configuration from the app settings
            var config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            // define the database to use
            optionsBuilder.UseSqlServer(config.GetConnectionString("DefaultConnection"));
        }
    }
}
