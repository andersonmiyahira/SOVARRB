using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infra.Data.Mappings
{
    public class LayoutValoreEsperadoMap : IEntityTypeConfiguration<Domain.Entities.LayoutValorEsperado>
    {
        public void Configure(EntityTypeBuilder<Domain.Entities.LayoutValorEsperado> builder)
        {
            builder.ToTable("LayoutValorEsperado");

            builder.Property(m => m.IdLayoutValorEsperado)
                .HasColumnName("IdLayoutValorEsperado")
                .IsRequired();


            builder.Property(m => m.IdLayout)
                .HasColumnName("IdLayout")
                .IsRequired();

            builder.Property(m => m.IdValorEsperado)
                .HasColumnName("IdValorEsperado")
                .IsRequired();

            builder.HasKey(o => o.IdLayoutValorEsperado);
        }
    }
}
