using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infra.Data.Mappings
{
    public class ValorEsperadoMap : IEntityTypeConfiguration<Domain.Entities.ValorEsperado>
    {
        public void Configure(EntityTypeBuilder<Domain.Entities.ValorEsperado> builder)
        {
            builder.ToTable("ValorEsperado");

            builder.Property(m => m.IdValoreEsperado)
                   .HasColumnName("IdValoreEsperado")
                   .IsRequired();

            builder.Property(m => m.Descricao)
                   .HasColumnName("Descricao")
                   .IsRequired();

            builder.Property(m => m.valor)
                   .HasColumnName("Valor")
                   .IsRequired();

            builder.Property(m => m.IdBanco)
                   .HasColumnName("IdBanco")
                   .IsRequired();

            builder.Property(m => m.IdTipoCNAB)
                   .HasColumnName("IdTipoCNAB")
                   .IsRequired();

            builder.Property(m => m.IdTipoBoleto)
                   .HasColumnName("IdTipoBoleto")
                   .IsRequired();

            builder.Property(m => m.DataCadastro)
                   .HasColumnName("DataCadastro")
                   .IsRequired();

            builder.Property(m => m.Ativo)
                   .HasColumnName("Ativo")
                   .IsRequired();

            builder.HasKey(o => o.IdValoreEsperado);
        }
    }
}
