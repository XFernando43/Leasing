using Dapper;
using Leasing.Core.Bussines.Request;
using Leasing.Core.Bussines.Response;
using Leasing.Core.Entities;
using Leasing.Infraestructura.Querys.Interfaces;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Leasing.Infraestructura.Querys
{
    public class LoginQuery : ILoginQuery
    {
        public readonly string? ConnectionString;
        public LoginQuery(IConfiguration configuration)
        {
            ConnectionString = ConfigurationExtensions.GetConnectionString(configuration, "EntitiesConnection");
        }
        public async Task CreateUser(UserRequest request)
        {
            using var connection = new SqlConnection(ConnectionString);
            DynamicParameters param = new();
            param.Add("@name",request.Name);
            param.Add("@lastname", request.LastName);
            param.Add("@gmail", request.Email);
            param.Add("@password", request.Password);
            param.Add("@phone", request.Telefono);
            connection.Query("SP_InsertUser", param, commandType: CommandType.StoredProcedure);
        }

        public async Task<IEnumerable<UserResponse>> getUser(string gmail, string password)
        {
            using var connection = new SqlConnection(ConnectionString);
            DynamicParameters param = new();
            param.Add("@Email", gmail);
            param.Add("@Password", password);
            return await connection.QueryAsync<UserResponse>
            ("SP_GetUSer_By_Correo_Password", param, commandType: CommandType.StoredProcedure); 
        }
    }
}
