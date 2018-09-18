using System.ComponentModel;

namespace Domain.Enums
{
    public enum ETipoCampo
    {
        [Description("Numérico")]
        Numerico = 1,
        [Description("Alfanumérico")]
        Alfanumerico = 2,
        [Description("DataAAAAMMDD")]
        DataAAAAMMDD = 3,
        [Description("DataMMDDAA")]
        DataMMDDAA = 4,
        [Description("HoraDDMMAAAA")]
        HoraDDMMAAAA = 5
    }
}
