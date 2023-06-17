using Leasing.Core.Bussines.Request;
using Leasing.Core.Bussines.Response;
using Leasing.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Leasing.Infraestructura.Querys.Interfaces
{
    public interface IPrestamoQuery
    {
        Task CreatePrestamo(BonoRequest request);
        void CreatePrestamo2();
        Task<IEnumerable<Bono>> GetPrestamos();
        Task<IEnumerable<Bono>> GetPrestamoID(int id);
        Task ActualizarPrestamo(BonoRequest request);
        Task DeletePrestamo(int id);
        ////Leasing
        void CreateLeasingNote1(Bono bono);
        Task<IEnumerable<LeasingNotes1>> getFinancingNote1_ID(int id);
        Task<IEnumerable<LeasingTable>> LeasingTable(Bono bono);

    }
}
