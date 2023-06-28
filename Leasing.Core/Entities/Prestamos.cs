using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Leasing.Core.Entities
{
    public class Prestamos
    {
        public int ID { get; set; }
        public string tipo_Moneda { get; set; }
        public int precioVentaActivo { get; set; }
        public int cuota_inicial { get; set; }
        public int n_Anios { get; set; }
        public int frecuencia_Pago { get; set; }
        public int tasa { get; set; }
        public int tipo_Tasa { get; set; }
        public int frecuencia_tasa { get; set; }
        public int periodo_gracia { get; set; }
        public int n_periodos_gracia { get; set; }
        public int User_ID { get; set; }
        public int periodo_Capitalización { get; set; }
    }
}
