using System;
using System.ComponentModel;

namespace Domain.Extensions
{
    public static class EnumExtensions
    {
        public static string GetDescription(this Enum enumItem)
        {
            var type = enumItem.GetType();

            var memberInfo = type.GetMember(enumItem.ToString());

            if (memberInfo.Length <= 0)
                return enumItem.ToString();

            var attrs = memberInfo[0].GetCustomAttributes(typeof(DescriptionAttribute), false);

            return attrs.Length > 0
                ? ((DescriptionAttribute)attrs[0]).Description
                : enumItem.ToString();
        }

        public static string ObterDescricao(Enum enumItem)
        {
            var type = enumItem.GetType();

            var memberInfo = type.GetMember(enumItem.ToString());

            if (memberInfo.Length <= 0)
                return enumItem.ToString();

            var attrs = memberInfo[0].GetCustomAttributes(typeof(DescriptionAttribute), false);

            return attrs.Length > 0
                ? ((DescriptionAttribute)attrs[0]).Description
                : enumItem.ToString();
        }
    }
}
