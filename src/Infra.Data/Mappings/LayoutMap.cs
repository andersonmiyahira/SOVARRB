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

            builder.Property(m => m.BancoId)
                .HasColumnName("BancoId")
                .IsRequired();

            builder.Property(m => m.IdTipoCNAB)
                .HasColumnName("TipoCNABId")
                .IsRequired();

            builder.Property(m => m.IdTipoTransacao)
                .HasColumnName("TipoTransacaoId")
                .IsRequired();

            builder.Property(m => m.IdTipoRegistro)
                .HasColumnName("TipoRegistroId")
                .IsRequired();

            builder.Property(m => m.IdSegmento)
                .HasColumnName("SegmentoId");

            builder.Property(m => m.IdTipoCampo)
                .HasColumnName("TipoCampoId")
                .IsRequired();

            builder.Property(m => m.IdTipoBoleto)
                .HasColumnName("TipoBoletoId")
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

            builder
                    .HasOne(x => x.Banco);

            builder
                   .HasMany(x => x.LayoutValoresEsperados)
                   .WithOne(x => x.Layout);

            builder.HasKey(o => o.IdLayout);
        }
    }
}
