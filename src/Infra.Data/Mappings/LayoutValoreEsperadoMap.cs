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


            builder.Property(m => m.LayoutId)
                .HasColumnName("LayoutId")
                .IsRequired();

            builder.Property(m => m.ValorEsperadoId)
                .HasColumnName("ValorEsperadoId")
                .IsRequired();

            builder
                .HasOne(x => x.Layout)
                .WithMany(x => x.LayoutValoresEsperados)
                .HasForeignKey(x => x.LayoutId);

            builder
                .HasOne(x => x.ValorEsperado)
                .WithMany(x => x.LayoutValoresEsperados)
                .HasForeignKey(x => x.ValorEsperadoId);

            builder.HasKey(o => o.IdLayoutValorEsperado);
        }
    }
}
