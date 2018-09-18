using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infra.Data.Mappings
{
    public class LogArquivoMap : IEntityTypeConfiguration<Domain.Entities.LogArquivo>
    {
        public void Configure(EntityTypeBuilder<Domain.Entities.LogArquivo> builder)
        {
            builder.ToTable("LogArquivpo");

            builder.Property(m => m.IdLogArquivo)
                   .HasColumnName("IdLogArquivo")
                   .IsRequired();

            builder.Property(m => m.ArquivoId)
                   .HasColumnName("ArquivoId")
                   .IsRequired();

            builder.Property(m => m.Linha)
                   .HasColumnName("Linha")
                   .IsRequired();

            builder.Property(m => m.PosicaoDe)
                   .HasColumnName("PosicaoDe")
                   .IsRequired();

            builder.Property(m => m.PosicaoAte)
                   .HasColumnName("PosicaoAte")
                   .IsRequired();

            builder.Property(m => m.EhValido)
                   .HasColumnName("EhValido")
                   .IsRequired();

            builder.Property(m => m.DataCadastro)
                   .HasColumnName("DataCadastro")
                   .IsRequired();

            builder.Property(m => m.Mensagem)
                   .HasColumnName("Mensagem");

            builder.Property(m => m.TipoParametroId)
                   .HasColumnName("TipoParametroId")
                   .IsRequired();

            builder.HasKey(o => o.IdLogArquivo);
        }
    }
}
