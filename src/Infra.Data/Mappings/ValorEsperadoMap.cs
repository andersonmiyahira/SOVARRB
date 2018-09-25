using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infra.Data.Mappings
{
    public class ValorEsperadoMap : IEntityTypeConfiguration<Domain.Entities.ValorEsperado>
    {
        public void Configure(EntityTypeBuilder<Domain.Entities.ValorEsperado> builder)
        {
            builder.ToTable("ValorEsperado");

            builder.Property(m => m.IdValorEsperado)
                   .HasColumnName("IdValorEsperado")
                   .IsRequired();

            builder.Property(m => m.Descricao)
                   .HasColumnName("Descricao")
                   .IsRequired();

            builder.Property(m => m.Valor)
                   .HasColumnName("Valor")
                   .IsRequired();

            builder.Property(m => m.BancoId)
                   .HasColumnName("BancoId")
                   .IsRequired();

            builder.Property(m => m.TipoCNABId)
                   .HasColumnName("TipoCNABId")
                   .IsRequired();

            builder.Property(m => m.TipoBoletoId)
                   .HasColumnName("TipoBoletoId")
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

            builder
                   .HasOne(x => x.Banco);

            builder
                   .HasMany(x => x.LayoutValoresEsperados)
                   .WithOne(x => x.ValorEsperado)
                   .HasForeignKey(x => x.ValorEsperadoId);

            builder.HasKey(o => o.IdValorEsperado);
        }
    }
}
