using Dapper;
using Leasing.Core.Bussines.Request;
using Leasing.Core.Entities;
using Leasing.Infraestructura.Querys.Interfaces;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Data;

namespace Leasing.Infraestructura.Querys
{
    public class BonoQuery : IBonoQuery
    {
        private readonly string? ConnectionString;
        public BonoQuery(IConfiguration configuration)
        {
            ConnectionString = ConfigurationExtensions.GetConnectionString(configuration, "EntitiesConnection");
        }
        public async Task CreateBono(BonoRequest request)
        {

            using var connection = new SqlConnection(ConnectionString);
            DynamicParameters param = new();



            param.Add("@moneda", request.tipo_moneda);


            param.Add("@monto_total", request.monto_total);
            param.Add("@adelanto", request.adelanto);
            param.Add("@monto_desembolsado", request.monto_desembolsado);

            param.Add("@tipo_tasa", request.tipo_tasa);


            param.Add("@tiempo_tasa", request.tiempo_tasa);


            param.Add("@tasa", request.tasa);

            param.Add("@periodo_gracia", request.periodo_gracia);

            param.Add("@tipo_periodo_gracia", request.tipo_periodo_gracia);

            //param.Add("@tiempo_periodo_gracia", request.tiempo_periodo_gracia);
            param.Add("@tiempo_periodo_gracia", null);
            
            param.Add("@periodo_pago_prestamo", request.periodo_pago_prestamo);
            //param.Add("@periodo_pago_prestamo", "Mensual");

            param.Add("@tiempo_prestamo", request.tiempo_prestamo);
            param.Add("@tasa_seguro_desgravamen", request.tasa_seguro_desgravamen);
            param.Add("@tasa_seguro_inmueble", request.tasa_seguro_inmueble);
            connection.Query
                ("SP_Create_Bono", param, commandType: CommandType.StoredProcedure);

        }

        public void CreateBono2()
        {
            using var connection = new SqlConnection(ConnectionString);
            DynamicParameters param = new();
            param.Add("@moneda", "Dolares");
            param.Add("@monto_total", 650000);

            param.Add("@adelanto", 45000);
            param.Add("@monto_desembolsado", 12000);
            param.Add("@tipo_tasa", "Efectivo");

            param.Add("@tiempo_tasa", "Anual");
            param.Add("@tasa", 8.5);
            param.Add("@periodo_gracia", "No");


            param.Add("@tipo_periodo_gracia", 1);
            param.Add("@tiempo_periodo_gracia", null);


            param.Add("@periodo_pago_prestamo", "Mensual");

            param.Add("@tiempo_prestamo", 240);
            param.Add("@tasa_seguro_desgravamen", 0.08);
            param.Add("@tasa_seguro_inmueble", 0.5);
            connection.Query
                ("SP_Create_Bono", param, commandType: CommandType.StoredProcedure);

        }

        public async Task<IEnumerable<Bono>> GetBonos()
        {
            using var connection = new SqlConnection(ConnectionString);
            DynamicParameters param = new();
            return await connection.QueryAsync<Bono>
            ("SP_getBonos", param, commandType: CommandType.StoredProcedure);

        }
    }
}
