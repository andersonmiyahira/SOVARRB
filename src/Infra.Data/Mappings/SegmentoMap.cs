using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infra.Data.Mappings
{
    public class SegmentoMap : IEntityTypeConfiguration<Segmento>
    {
        public void Configure(EntityTypeBuilder<Segmento> builder)
        {
            builder.ToTable("Segmento");

            builder.Property(m => m.IdSegmento)
                .HasColumnName("IdSegmento")
                .IsRequired();

            builder.Property(m => m.IdBanco)
                .HasColumnName("IdBanco")
                .IsRequired();

            builder.Property(m => m.Descricao)
                .HasColumnName("Descricao")
                .HasMaxLength(100)
                .IsRequired();

            builder.Property(m => m.DataCadastro)
                .HasColumnName("DataCadastro")
                .IsRequired();

            builder.Property(m => m.Ativo)
                   .HasColumnName("Ativo")
                   .IsRequired();

            builder.HasKey(o => o.IdSegmento);
        }
    }
}
