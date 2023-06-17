namespace Leasing.Core.Entities
{
    public partial class Bono
    {
        public int ID { get; set; }
        public float PrecioVentaActivo { get; set; }
        public float CuotaInicial { get; set; }
        public float N_Anios { get; set; }
        public float Frecuencia_Pago { get; set; }
        public float N_Dias_Anios { get; set; }
        public float Costos_Notariales { get; set; }
        public float Costes_Registrales { get; set; }
        public float Tasacion { get; set; }
        public float Comision_Estudio { get; set; }
        public float Comision_Activacion { get; set; }
        public float Comision_Periodo { get; set; }
        public float portes { get; set; }
        public float Gastos_Administracion { get; set; }
        public float Seguro_Degravament { get; set; }
        public float Seguro_Riesgo { get; set; }
        public float Tasa_Descuento { get; set; }
        public int User_ID { get; set; }

    }
}
