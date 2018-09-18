using System.ComponentModel;

namespace Domain.Enums
{
    public enum ETipoBoleto
    {
        [Description("Remessa")]
        Remessa = 1,
        [Description("Retorno Bancário")]
        RetornoBancario = 2
    }
}
