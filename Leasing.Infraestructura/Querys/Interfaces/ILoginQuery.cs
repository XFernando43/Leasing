using Leasing.Core.Bussines.Request;
using Leasing.Core.Bussines.Response;

namespace Leasing.Infraestructura.Querys.Interfaces
{
    public interface ILoginQuery
    {
        Task CreateUser(UserRequest request);
        Task<IEnumerable<UserResponse>> getUser(string gmail, string password);

    }
}
