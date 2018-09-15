using System.ComponentModel;

namespace Domain.Enums
{
    public enum ETipoTransacao
    {
        [Description("Pagamento")]
        Pagamento = 1,
        [Description("Cobrança")]
        Cobranca = 2
    }
}
