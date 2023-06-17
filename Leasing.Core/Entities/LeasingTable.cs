using System.Diagnostics.Contracts;

namespace Leasing.Core.Entities
{
    public partial class LeasingTable
    {
        public int LeasingId { get; set; }

        public float N { get; set; }
        public float TEA { get; set; }
        public float TEM { get; set; }
        public float IA { get; set; }
        public float IP { get; set; }
        public char PG { get; set; }
        public float SaldoInicial { get; set; }
        public float SaldoInicialIndexado { get; set; }
        public float Interes { get; set; }
        public float Cuota { get; set; }
        public float Amort { get; set; }
        public float Prepago { get; set; }
        public float Seguro_Degrav { get; set; }
        public float Seguro_Riesgo { get; set; }
        public float Comision { get; set; }
        public float Portes { get; set; }
        public float GastosAdm { get; set; }
        public float Saldo_Final { get; set; }
        public float Flujo { get; set; }
    }
}
