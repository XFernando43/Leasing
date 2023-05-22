using Leasing.Core.Bussines.Request;
using Leasing.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Leasing.Infraestructura.Querys.Interfaces
{
    public interface IBonoQuery
    {
        Task CreateBono(BonoRequest request);
        void CreateBono2();
        Task <IEnumerable<Bono>> GetBonos();
        Task<IEnumerable<Bono>> GetBonoID(int id);
        Task ActualizarBono(BonoRequest request);
        Task DeleteBono(int id);
    }
}
