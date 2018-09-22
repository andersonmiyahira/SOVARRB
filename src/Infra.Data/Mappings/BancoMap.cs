using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infra.Data.Mappings
{
    public class BancoMap : IEntityTypeConfiguration<Banco>
    {
        public void Configure(EntityTypeBuilder<Banco> builder)
        {
            builder.ToTable("Banco");

            builder.Property(m => m.Id)
                .HasColumnName("IdBanco")
                .IsRequired();

            builder.Property(m => m.Descricao)
                .HasColumnName("Descricao")
                .HasMaxLength(20)
                .IsRequired();

            builder.Property(m => m.DataCadastro)
                .HasColumnName("DataCadastro")
                .IsRequired();

            builder.Property(m => m.DataAlteracao)
              .HasColumnName("DataAlteracao")
              .IsRequired();

            builder.Property(m => m.Ativo)
              .HasColumnName("Ativo")              
              .IsRequired();

            builder.HasKey(o => o.Id);
        }
    }
}
