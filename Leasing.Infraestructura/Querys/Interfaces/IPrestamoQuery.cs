using Leasing.Core.Bussines.Request;
using Leasing.Core.Entities;

namespace Leasing.Infraestructura.Querys.Interfaces
{
    public interface IPrestamoQuery
    {
        Task CreatePrestamo(BonoRequest request);
        Task<IEnumerable<Bono>> GetPrestamos();
        Task<IEnumerable<Bono>> GetPrestamoID(int id);
        Task ActualizarPrestamo(BonoRequest request);
        Task DeletePrestamo(int id);
        ////Leasing
        void CreateLeasingNote1(Bono bono);
        Task<IEnumerable<LeasingNotes1>> getFinancingNote1_ID(int id);
        Task<IEnumerable<LeasingTable>> LeasingTable(Bono bono);
        ////////////
        Task crearPrestamoDatos(PrestamoRequest request);
        Task<IEnumerable<Prestamos>> getPrestamosDatos();
        Task<IEnumerable<Prestamos>> getPrestamosDatosID(int id);
    }
}
