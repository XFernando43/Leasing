$(document).ready(function () {
    var dsh = {
        init: function () {
            dsh.CreateBonoHttp();


        },
        PostBono() {

        },
        CreateBonoHttp() {
            $('#ButtonCreate').click(function () {
                console.log("Pirata");
                CreateBono();
            });
        },

    }
    dsh.init();
});

function ClasePrestamo() {

    this.tipo_Moneda = $('#TipoMoneda').val();
    this.precioVentaActivo = $('#PCVA').val();
    this.cuota_inicial = $('#C_I').val();
    this.n_Anios = $('#N_A').val();
    this.frecuencia_Pago = $('#FP').val();
    this.tasa = $('#Tasa').val();
    this.tipo_Tasa = $('#TipoTasa').val();
    this.frecuencia_tasa = $('#FrecuenciaTasa').val();
    this.periodo_gracia = $('#PeriodoGracia').val();
    this.n_periodos_gracia = $('#NumeroPeriodos').val();
    this.User_ID = 1;
    this.periodo_Capitalización = $('#PeriodoCapitalizacion').val();;


}


function CreateBono() {
    console.log("datos de la clase");
    var Bono = new ClasePrestamo();


    console.log("ACA LOS DATOS JALADOS");
    console.log("Tipo de moneda: " + Bono.tipo_Moneda);
    console.log("Precio de venta Activo: " + Bono.precioVentaActivo);
    console.log("% Cuota Inicial: " + Bono.cuota_inicial);
    console.log("N años: " + Bono.n_Anios);
    console.log("Frecuencia de pagos: " + Bono.frecuencia_Pago);
    console.log("Tasa: " + Bono.tasa);
    console.log("tipo_Tasa: " + Bono.tipo_Tasa);
    console.log("periodo_Capitalización: " + Bono.periodo_Capitalización);
    console.log("frecuencia_tasa: " + Bono.frecuencia_tasa);
    console.log("periodo_gracia: " + Bono.periodo_gracia);
    console.log("n_periodos_gracia: " + Bono.n_periodos_gracia);

    console.log(Bono);

    
    $.ajax({
        type: 'POST', // Cambiar a POST para enviar los datos en el cuerpo de la solicitud
        url: '../CreatePrestamo',
        contentType: 'application/json', // Establecer el tipo de contenido como JSON
        data: JSON.stringify(Bono), // Convertir la instancia de la clase a JSON
        success: function (data) {
            console.log(data);
            window.location.href = "../Bono/TablaBonoViews";
        }
    });

}


