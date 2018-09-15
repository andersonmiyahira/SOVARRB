using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infra.Data.Mappings
{
    public class UsuarioMap : IEntityTypeConfiguration<Domain.Entities.Usuario>
    {
        public void Configure(EntityTypeBuilder<Domain.Entities.Usuario> builder)
        {
            builder.ToTable("Usuario");

            builder.Property(m => m.IdUsuario)
                   .HasColumnName("IdUsuario")
                   .IsRequired();

            builder.Property(m => m.Nome)
                   .HasColumnName("Nome")
                   .IsRequired();

            builder.Property(m => m.Email)
                   .HasColumnName("Email")
                   .IsRequired();

            builder.Property(m => m.Senha)
                   .HasColumnName("Senha")
                   .IsRequired();

            builder.Property(m => m.EhAdministrador)
                   .HasColumnName("EhAdministrador")
                   .IsRequired();

            builder.Property(m => m.DataAlteracao)
                   .HasColumnName("DataAlteracao")
                   .IsRequired();

            builder.Property(m => m.DataCadastro)
                   .HasColumnName("DataCadastro")
                   .IsRequired();

            builder.Property(m => m.Ativo)
                   .HasColumnName("Ativo")
                   .IsRequired();

            builder.HasKey(o => o.IdUsuario);
        }
    }
}
