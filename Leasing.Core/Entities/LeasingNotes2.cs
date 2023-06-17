using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Leasing.Core.Entities
{
    public partial class LeasingNotes2
    {
        /// 2
        public int Intereses { get; set; }
        public int Amortización_del_capital { get; set; }
        public int Seguro_de_desgravamen { get; set; }
        public int Seguro_contra_todo_riesgo { get; set; }
        public int Comisiones_periodicas { get; set; }
        public int Portes_Gastos_adm { get; set; }
    }
}
