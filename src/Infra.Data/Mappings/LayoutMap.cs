using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infra.Data.Mappings
{
    public class LayoutMap : IEntityTypeConfiguration<Layout>
    {
        public void Configure(EntityTypeBuilder<Layout> builder)
        {
            builder.ToTable("Layout");

            builder.Property(m => m.IdLayout)
                .HasColumnName("IdLayout")
                .IsRequired();

            builder.Property(m => m.IdBanco)
                .HasColumnName("IdBanco")
                .IsRequired();

            builder.Property(m => m.IdTipoCNAB)
                .HasColumnName("IdTipoCNAB")
                .IsRequired();

            builder.Property(m => m.IdTipoTransacao)
                .HasColumnName("IdTipoTransacao")
                .IsRequired();

            builder.Property(m => m.IdTipoRegistro)
                .HasColumnName("IdTipoRegistro")
                .IsRequired();

            builder.Property(m => m.IdSegmento)
                .HasColumnName("IdSegmento");

            builder.Property(m => m.IdTipoCampo)
                .HasColumnName("IdTipoCampo")
                .IsRequired();

            builder.Property(m => m.IdTipoBoleto)
                .HasColumnName("IdTipoBoleto")
                .IsRequired();

            builder.Property(m => m.PosicaoDe)
                .HasColumnName("PosicaoDe")
                .IsRequired();

            builder.Property(m => m.PosicaoAte)
                .HasColumnName("PosicaoAte")
                .IsRequired();

            builder.Property(m => m.Descricao)
                .HasColumnName("Descricao")
                .HasMaxLength(20)
                .IsRequired();

            builder.Property(m => m.DataCadastro)
                .HasColumnName("DataCadastro")
                .IsRequired();

            builder.Property(m => m.Obrigatorio)
              .HasColumnName("Obrigatorio")
              .IsRequired();

            builder.HasKey(o => o.IdLayout);
        }
    }
}
