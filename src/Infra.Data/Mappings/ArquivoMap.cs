using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infra.Data.Mappings
{
    public class ArquivoMap : IEntityTypeConfiguration<Arquivo>
    {
        public void Configure(EntityTypeBuilder<Arquivo> builder)
        {
            builder.ToTable("Arquivo");

            builder.Property(m => m.IdArquivo)
                .HasColumnName("IdArquivo")
                .IsRequired();

            builder.Property(m => m.BancoId)
                .HasColumnName("BancoId")
                .IsRequired();

            builder.Property(m => m.TipoBoletoId)
                .HasColumnName("TipoBoletoId")
                .IsRequired();

            builder.Property(m => m.TipoCNABId)
                .HasColumnName("TipoCNABId")
                .IsRequired();

            builder.Property(m => m.UsuarioId)
                .HasColumnName("UsuarioId")
                .IsRequired();

            builder.Property(m => m.NomeArquivoGerado)
                .HasColumnName("NomeArquivoGerado")
                .HasMaxLength(255)
                .IsRequired();

            builder.Property(m => m.NomeArquivoOriginal)
                .HasColumnName("NomeArquivoOriginal")
                .HasMaxLength(255)
                .IsRequired();

            builder.Property(m => m.DataCadastro)
                .HasColumnName("DataCadastro")                
                .IsRequired();

            builder.Property(m => m.DataAlteracao)
                .HasColumnName("DataAlteracao")
                .IsRequired();

            builder
                 .HasOne(x => x.Banco);

            builder.HasKey(o => o.IdArquivo);
        }
    }
}
