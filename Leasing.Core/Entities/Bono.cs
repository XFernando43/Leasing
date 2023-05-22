using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Leasing.Core.Entities
{
    public partial class Bono
    {
        public int IdPrestamo { get; set; }
        public string tipo_moneda { get; set; }
        public string monto_total { get; set; }
        public int Adelanto { get; set; }
        public int monto_Desembolsado { get; set; }
        public string tipo_tasa { get; set; }
        public string tiempo_Tasa { get; set; }
        public float tasa { get; set; }
        public string periodo_gracia { get; set; }
        public int tipo_periodo_gracia { get; set; }
        public int? tiempo_periodo_gracia { get; set; }
        public string periodo_pago_prestamo { get; set; }
        public int tiempo_prestamo { get; set; }
        public float tasa_seguro_degravamen { get; set; }
        public int tasa_seguro_inmueble { get; set; }
        public int ID_Arrendatario { get; set; }
        public int ID_Entidad { get; set; }

    }
}
