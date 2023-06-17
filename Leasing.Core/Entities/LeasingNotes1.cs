using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Leasing.Core.Entities
{
    public partial class LeasingNotes1
    {
        /// 1
        public int ID { get; set; }
        public float Saldo_Financiar { get; set; }
        public float Monto_prestamo { get; set; }
        public float N_Cuotas_Anio { get; set; }
        public float N_Total_de_Cuotas { get; set; }
        public float Por_Seguro_desgrav { get; set; }
        public float Seguro_Riesgo_Resultado { get; set; }
        public int PrestamoId { get; set; } 
    
        

    }
}
