using System.ComponentModel;

namespace Domain.Enums
{
    public enum ETipoRegistro
    {
        [Description("Header")]
        Header = 1,
        [Description("Detalhe")]
        Detalhe = 2,
        [Description("Trailer")]
        Trailer = 3
    }
}
