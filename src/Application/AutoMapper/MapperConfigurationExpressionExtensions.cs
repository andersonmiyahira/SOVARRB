using AutoMapper;

namespace Application.AutoMapper
{

    public static class MapperConfigurationExpressionExtensions
    {
        public static void ConfigureApplicationProfiles(this IMapperConfigurationExpression mapperConfiguration)
        {
            mapperConfiguration.AddProfile(new DomainToViewModelProfile());
            mapperConfiguration.AddProfile(new ViewModelToDomainProfile());
        }
    }
}
