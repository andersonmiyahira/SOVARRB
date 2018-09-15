using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infra.Data.Mappings
{
    public class LayoutValoreEsperadoMap : IEntityTypeConfiguration<Domain.Entities.LayoutValorEsperado>
    {
        public void Configure(EntityTypeBuilder<Domain.Entities.LayoutValorEsperado> builder)
        {
            builder.ToTable("LayoutValorEsperado");

            //builder.Property(m => m.Id)
            //    .HasColumnName("IdTipoCNAB")
            //    .IsRequired(); 


            builder.HasKey(o => o.IdLayoutValorEsperado);
        }
    }
}
