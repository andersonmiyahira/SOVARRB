using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infra.Data.Mappings
{
   public class TipoCNABMap : IEntityTypeConfiguration<Domain.Entities.TipoCNAB>
    {
        public void Configure(EntityTypeBuilder<Domain.Entities.TipoCNAB> builder)
        {
            builder.ToTable("TipoCNAB");

            builder.Property(m => m.Id)
                .HasColumnName("IdTipoCNAB")
                .IsRequired(); 

            builder.Property(m => m.Descricao)
                .HasColumnName("Descricao")
                .HasMaxLength(20)
                .IsRequired();
             
            builder.HasKey(o => o.Id);
        }
    }
}
