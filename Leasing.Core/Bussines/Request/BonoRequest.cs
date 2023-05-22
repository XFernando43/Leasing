using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Leasing.Core.Bussines.Request
{
    public partial class BonoRequest
    {
        public string tipo_moneda { get; set; }
        public int monto_total { get; set; }
        public int adelanto { get; set; }
        public int monto_desembolsado { get; set; }
        public string tipo_tasa { get; set; }
        public string tiempo_tasa { get; set; }
        public float tasa { get; set; }
        public string periodo_gracia { get; set; }
        public string tipo_periodo_gracia { get; set; }
        public int? tiempo_periodo_gracia { get; set; }
        public string periodo_pago_prestamo { get; set; }
        public string tiempo_prestamo { get; set; }
        public float tasa_seguro_desgravamen { get; set; }
        public float tasa_seguro_inmueble { get; set; }
        //public int ID_Arrendatario { get; set; }
        //public int ID_Entidad { get; set; }
    }
}
