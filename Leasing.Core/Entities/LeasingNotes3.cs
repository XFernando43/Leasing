using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Leasing.Core.Entities
{
    public partial class LeasingNotes3
    {
        /// 3
        public int Tasa_descuento { get; set; }
        public int TIR_operación { get; set; }
        public int TCEA_operación { get; set; }
        public int VAN_operación { get; set; }
    }
}
