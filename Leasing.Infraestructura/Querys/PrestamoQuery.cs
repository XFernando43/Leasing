using Azure.Core;
using Dapper;
using Leasing.Core.Bussines.Request;
using Leasing.Core.Bussines.Response;
using Leasing.Core.Entities;
using Leasing.Infraestructura.Querys.Interfaces;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Data;

namespace Leasing.Infraestructura.Querys
{
    public class PrestamoQuery : IPrestamoQuery
    {
        private readonly string? ConnectionString;
        public PrestamoQuery(IConfiguration configuration)
        {
            ConnectionString = ConfigurationExtensions.GetConnectionString(configuration, "EntitiesConnection");
        }

        public async Task ActualizarPrestamo(BonoRequest request)
        {
            try
            {
                using var connection = new SqlConnection(ConnectionString);
                DynamicParameters param = new();
                param.Add("@id", request.ID);
                param.Add("@PrecioVentaActivo", request.PrecioVentaActivo);
                param.Add("@CuotaInicial", request.CuotaInicial);
                param.Add("@N_Anios", request.N_Anios);
                param.Add("@Frecuencia_Pago", request.Frecuencia_Pago);
                param.Add("@N_Dias_Anios", request.Numero_DiasXAño);

                param.Add("@Costos_Notariales", request.Costos_Notariales);
                param.Add("@Costes_Registrales", request.Costes_Registrales);
                param.Add("@Tasacion", request.Tasacion);
                param.Add("@Comision_Estudio", request.Comision_Estudio);
                param.Add("@Comision_Activacion", request.Comision_Activacion);

                param.Add("@Comision_Periodo", request.Comision_Periodo);
                param.Add("@Portes", request.portes);
                param.Add("@Gastos_Administracion", request.Gastos_Administracion);
                param.Add("@Seguro_Degravament", request.Seguro_Degravament);
                param.Add("@Seguro_Riesgo", request.Seguro_Riesgo);
                param.Add("@Tasa_Descuento", request.Tasa_Descuento);

                connection.Query
                ("UPDATEPRESTAMO", param, commandType: CommandType.StoredProcedure);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task CreatePrestamo(BonoRequest request)
        {
            using var connection = new SqlConnection(ConnectionString);
            DynamicParameters param = new();
            param.Add("@PrecioVentaActivo", request.PrecioVentaActivo);
            param.Add("@CuotaInicial", request.CuotaInicial);
            param.Add("@N_Anios", request.N_Anios);
            param.Add("@Frecuencia_Pago", request.Frecuencia_Pago);
            param.Add("@N_Dias_Anios", request.Numero_DiasXAño);

            param.Add("@Costos_Notariales", request.Costos_Notariales);
            param.Add("@Costes_Registrales", request.Costes_Registrales);
            param.Add("@Tasacion", request.Tasacion);
            param.Add("@Comision_Estudio", request.Comision_Estudio);
            param.Add("@Comision_Activacion", request.Comision_Activacion);

            param.Add("@Comision_Periodo", request.Comision_Periodo);
            param.Add("@Portes", request.portes);
            param.Add("@Gastos_Administracion", request.Gastos_Administracion);
            param.Add("@Seguro_Degravament", request.Seguro_Degravament);
            param.Add("@Seguro_Riesgo", request.Seguro_Riesgo);
            param.Add("@Tasa_Descuento", request.Tasa_Descuento);
            param.Add("@User_ID", 1);

            connection.Query
                ("InsertarPrestamo", param, commandType: CommandType.StoredProcedure);
        }

        public void CreatePrestamo2()
        {
            using var connection = new SqlConnection(ConnectionString);
            DynamicParameters param = new();

            param.Add("@PrecioVentaActivo", 15000);
            param.Add("@CuotaInicial", 20);
            param.Add("@N_Anios", 20);
            param.Add("@Frecuencia_Pago", 20);
            param.Add("@N_Dias_Anios", 20);

            param.Add("@Costos_Notariales", 20);
            param.Add("@Costes_Registrales", 20);
            param.Add("@Tasacion", 20);
            param.Add("@Comision_Estudio", 20);
            param.Add("@Comision_Activacion", 20);

            param.Add("@Comision_Periodo", 20);
            param.Add("@Portes", 20);
            param.Add("@Gastos_Administracion", 20);
            param.Add("@Seguro_Degravament", 20);
            param.Add("@Seguro_Riesgo", 20);
            param.Add("@Tasa_Descuento", 20);
            param.Add("@@User_ID", 1);

            connection.Query
                ("InsertarPrestamo", param, commandType: CommandType.StoredProcedure);
        }

        public async Task DeletePrestamo(int id)
        {
            try
            {
                using var connection = new SqlConnection(ConnectionString);
                DynamicParameters param = new();
                param.Add("@id", id);
                connection.Query
                ("SP_DeletePrestamo", param, commandType: CommandType.StoredProcedure);
            }
            catch (Exception)
            {

                throw;
            }
        }

        public async Task<IEnumerable<Bono>> GetPrestamos()
        {
            using var connection = new SqlConnection(ConnectionString);
            DynamicParameters param = new();
            return await connection.QueryAsync<Bono>
            ("SP_getPrestamos", param, commandType: CommandType.StoredProcedure);

        }

        public async Task<IEnumerable<Bono>> GetPrestamoID(int id)
        {
            using var connection = new SqlConnection(ConnectionString);
            DynamicParameters parameters = new();
            parameters.Add("@Id", id);
            return await connection.QueryAsync<Bono>("SP_GetPrestamoId", parameters, commandType: CommandType.StoredProcedure);
        }

        public async Task<IEnumerable<LeasingNotes1>> getFinancingNote1_ID(int id)
        {
            using var connection = new SqlConnection(ConnectionString);
            DynamicParameters parameters = new();
            parameters.Add("@Prestamo_ID", id);
            return await connection.QueryAsync<LeasingNotes1>("SP_GetLeasingNote1_ID", parameters, commandType: CommandType.StoredProcedure);

        }

        public async void CreateLeasingNote1(Bono bono)
        {

            LeasingNotes1 leasingNotes1 = new LeasingNotes1();
            leasingNotes1.Saldo_Financiar
                = (bono.PrecioVentaActivo - bono.PrecioVentaActivo * (bono.CuotaInicial * 0.01f));

            leasingNotes1.Monto_prestamo
                = leasingNotes1.Saldo_Financiar + bono.Costos_Notariales + bono.Costes_Registrales + bono.Tasacion;

            leasingNotes1.N_Cuotas_Anio = bono.N_Dias_Anios / bono.Frecuencia_Pago;

            leasingNotes1.N_Total_de_Cuotas = bono.N_Anios * leasingNotes1.N_Cuotas_Anio;

            leasingNotes1.Por_Seguro_desgrav = bono.Seguro_Degravament * bono.Frecuencia_Pago / 30;

            leasingNotes1.Seguro_Riesgo_Resultado
                = ((bono.Seguro_Riesgo * 0.01f) * bono.PrecioVentaActivo / leasingNotes1.N_Cuotas_Anio); ;
            leasingNotes1.PrestamoId = bono.User_ID;

            Console.WriteLine("1: " + leasingNotes1.Saldo_Financiar);
            Console.WriteLine("2: " + leasingNotes1.Monto_prestamo);
            Console.WriteLine("3: " + leasingNotes1.N_Cuotas_Anio);
            Console.WriteLine("4: " + leasingNotes1.N_Total_de_Cuotas);
            Console.WriteLine("5: " + leasingNotes1.Por_Seguro_desgrav);
            Console.WriteLine("6: " + leasingNotes1.Seguro_Riesgo_Resultado);
            Console.WriteLine("7: " + leasingNotes1.PrestamoId);


            using var connection = new SqlConnection(ConnectionString);
            DynamicParameters param = new();
            param.Add("@Saldo_Financiar", leasingNotes1.Saldo_Financiar);
            param.Add("@Monto_prestamo", leasingNotes1.Monto_prestamo);
            param.Add("@N_Cuotas_Anio", leasingNotes1.N_Cuotas_Anio);
            param.Add("@N_Total_de_Cuotas", leasingNotes1.N_Total_de_Cuotas);
            param.Add("@Por_Seguro_desgrav", leasingNotes1.Por_Seguro_desgrav);
            param.Add("@Seguro_Riesgo_Resultado", leasingNotes1.Seguro_Riesgo_Resultado);
            param.Add("@Prestamo_ID", leasingNotes1.PrestamoId);

            connection.Query
                ("Sp_CreateLeasingNote1", param, commandType: CommandType.StoredProcedure);

        }

        public float PAGO(float tasa, float nper, float va, float vf = 0.0f, float tipo = 0.0f)
        {
            float resultado = 0.0f;
            if (tasa != 0)
            {
                double tmp = Math.Pow(1 + tasa, nper);
                resultado = (float)(-((tasa * (vf + (tmp * va))) / ((-1 + tmp) * (1 + tasa * tipo))));
            }
            else if (nper != 0)
            {
                resultado = (float)(-(vf + va) / nper);
            }
            return resultado;
        }

        public async Task<IEnumerable<LeasingTable>> LeasingTable(Bono bono)
        {

            var note1 = new LeasingNotes1();
            using var connection = new SqlConnection(ConnectionString);

            // obtener Tabla 1
            //consulta 1
            DynamicParameters parameters = new();
            parameters.Add("@Prestamo_ID", 1);
            note1 = await connection.QuerySingleOrDefaultAsync<LeasingNotes1>("SP_GetLeasingNote1_ID", parameters, commandType: CommandType.StoredProcedure);
            Console.WriteLine(note1.N_Total_de_Cuotas);

            float exponente = (bono.Frecuencia_Pago / bono.N_Dias_Anios);

            var result = new List<LeasingTable>();
            for (int i = 0; i < 300; i++)
            {
                // variables
                float tea = 10.0f, tem = 0.0f, ia = 0.0f, ip = 0.0f, saldoInicial = 0.0f,
                saldoInicialIndexado = 0.0f, interes = 0.0f, cuota_inc = 0.0f, amortizacion = 0.0f,
                seguro_degrav = 0.0f, seguro_riesgo = 0.0f, comision = 0.0f, portes = 0.0f,gastos_adm=0.0f, saldofinal = 0.0f, flujo = 0;
                char pg = 'T';
                if (i==0)
                {
                    tea = 0; tem = 0; ia = 0; ip = 0; saldoInicial = 0;
                    saldoInicialIndexado = 0; interes = 0; cuota_inc = 0; amortizacion = 0;
                    seguro_degrav = 0; seguro_riesgo = 0; comision = 0; portes = 0; saldofinal = 0; flujo = note1.Monto_prestamo;
                }


                //TEMP
                if (i <= note1.N_Total_de_Cuotas)
                {
                    tem = (float)Math.Pow(1 + (float)(tea * 0.01), exponente) - 1;
                    tem = tem * 100;
                }
                //IP
                if (i <= note1.N_Total_de_Cuotas)
                {
                    ia = (float)(ia * 0.01);
                    ip = (float)Math.Pow(1 + ia, exponente) - 1;
                }
                //SALDO INICIAL
                if (i <= note1.N_Total_de_Cuotas)
                {
                    if (i == 1)
                    {
                        saldoInicial = note1.Monto_prestamo;
                    }
                    else if(i>0&&i <= note1.N_Total_de_Cuotas)
                    {
                        saldoInicial = result[i-1].Saldo_Final;
                    }
                }
                //Saldo Final --> falta complementar con lo del saldo Inicial
                if (i <= note1.N_Total_de_Cuotas)
                {
                    if (pg == 'T')
                    {
                        saldofinal = saldoInicialIndexado - interes;
                    }
                    else
                    {
                        saldoInicial = saldoInicialIndexado + amortizacion;
                    }
                }
                //Saldo Indexado
                saldoInicialIndexado = saldoInicial;
                // INTERES
                if (i <= note1.N_Total_de_Cuotas)
                {
                    //Console.Clear();
                    Console.WriteLine("SaldoInicial: " + saldoInicialIndexado + "  Tem: " + tem);
                    interes = saldoInicialIndexado * (float)(tem*0.01);
                }
                // COUTA
                if (i <= note1.N_Total_de_Cuotas)
                {
                    if(pg == 'T') {cuota_inc =
                           PAGO(tem + note1.Por_Seguro_desgrav, note1.N_Total_de_Cuotas - i + 1, saldoInicialIndexado, 0, 0);
                    }
                    else if(pg == 'P') { cuota_inc = 0; }
                    else
                    {
                        Console.WriteLine("TEM: ", tem);
                        cuota_inc =
                           PAGO(tem + note1.Por_Seguro_desgrav,note1.N_Total_de_Cuotas - i + 1,saldoInicialIndexado,0,0);
                    }

                } else { cuota_inc = 0; }
                // AMORTICACION
                if (i<= note1.N_Total_de_Cuotas)
                {

                }

                //////////////////////
                result.Add(new LeasingTable
                {   LeasingId = 1,N = i,TEA = tea,TEM = tem,IA = 0.0f,IP = ia,PG = 'T',
                    SaldoInicial = saldoInicial,SaldoInicialIndexado = saldoInicialIndexado,Interes = interes,
                    Cuota = cuota_inc,Amort = amortizacion,Prepago = 0.0f,Seguro_Degrav = seguro_degrav,Seguro_Riesgo = seguro_riesgo,
                    Comision = comision,Portes = portes,GastosAdm = gastos_adm,Saldo_Final = saldofinal, Flujo = flujo
                });

            }

            Console.WriteLine(result[1].Saldo_Final);
            // Devolver la lista de objetos LeasingTable como una tarea completada
            return await Task.FromResult<IEnumerable<LeasingTable>>(result);
        }

    }
}
