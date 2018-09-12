using System.ComponentModel;

namespace Domain.Enums
{
    public enum ETipoTransacao
    {
        [Description("Pagamento")]
        Pagamento = 1,
        [Description("Cobranca")]
        Cobranca = 2
    }
}
