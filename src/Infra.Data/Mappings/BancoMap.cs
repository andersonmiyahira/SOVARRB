using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infra.Data.Mappings
{
   public class BancoMap : IEntityTypeConfiguration<Domain.Entities.Banco>
    {
        public void Configure(EntityTypeBuilder<Domain.Entities.Banco> builder)
        {
            builder.ToTable("Banco");

            builder.Property(m => m.Id)
                .HasColumnName("IdBanco")
                .IsRequired(); 

            builder.Property(m => m.Descricao)
                .HasColumnName("Descricao")
                .HasMaxLength(20)
                .IsRequired();
             
            builder.HasKey(o => o.Id);
        }
    }
}
