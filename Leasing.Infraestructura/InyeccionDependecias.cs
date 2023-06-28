using Leasing.Infraestructura.Querys;
using Leasing.Infraestructura.Querys.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Leasing.Infraestructura
{
    public static class InyeccionDependecias
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddTransient<IPrestamoQuery, PrestamoQuery>();
            services.AddTransient<ILoginQuery, LoginQuery>();
            return services;
        }
    }
}
