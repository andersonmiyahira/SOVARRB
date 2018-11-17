using System;
using System.Collections.Generic;
using System.Globalization;
using System.Text;

namespace Domain.Helpers
{
    public static class DataHelper
    {
        public static bool ValidaDataString(string valor, string formato)
        {
            try
            {
                DateTime temp = DateTime.ParseExact(valor, formato, CultureInfo.InvariantCulture);
            }
            catch (Exception ex)
            {
                return false;
            }
            return true;
        }
    }
}
