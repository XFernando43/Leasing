$(document).ready(function () {
    var dsh = {
        init: function () {
            dsh.CreateBonoHttp();
        },
        PostBono() {
            
        },
        CreateBonoHttp() {
            $('#ButtonTest').click(function () {
                console.log("Pirata");
                
                CreateBono();
            });
        }

    }
    dsh.init();
});

function ClaseBono() {
    this.Tipo_Moneda = $('#TipoMoneda option:selected').val();
    this.Monto_Total = $('#Monto_Total').val();
    this.Adelanto = $('#Adelanto').val();
    this.Monto_Desembolsado = $('#Desembolsado').val();
    this.Tipo_Tasa = $('#TipoTasa').val();
    this.Tiempo_Tasa = $('#TiempoTasa').val();
    this.Tasa = $('#Tasa').val();
    this.Periodo_Gracia = $('#PeriodoGracia').val();
    this.Tipo_Periodo_Gracia = $('#TipoPeriodoGracia').val();
    this.Tiempo_Periodo_Gracia = $('#Tiempo_Periodo_Gracia').val();
    this.Periodo_Pago_Prestamo = $('#PeriodoPagoPrestamo').val();
    this.Tiempo_Prestamo = $('#Tiempo_Prestamo').val();
    this.Tasa_Seguro_Desgravamen = $('#Seguro_Degravamen').val();
    this.Tasa_Seguro_Inmueble = $('#Seguro_Inmbueble').val();
}

function CreateBono() {
    console.log("datos de la clase");
    var Bono = new ClaseBono();
    console.log(Bono.Tipo_Moneda);
    console.log(Bono.Monto_Total);
    console.log(Bono.Adelanto);
    console.log(Bono.Monto_Desembolsado);
    console.log(Bono.Tipo_Tasa);
    console.log(Bono.Tiempo_Tasa);
    console.log(Bono.Tasa);
    console.log(Bono.Periodo_Gracia);
    console.log(Bono.Tipo_Periodo_Gracia);
    console.log(Bono.Tiempo_Periodo_Gracia);
    console.log(Bono.Periodo_Pago_Prestamo);
    console.log(Bono.Tiempo_Prestamo);
    console.log(Bono.Tasa_Seguro_Desgravamen);
    console.log(Bono.Tasa_Seguro_Inmueble);

    $.ajax({
        type: 'POST', // Cambiar a POST para enviar los datos en el cuerpo de la solicitud
        url: '../CreateBono5555',
        contentType: 'application/json', // Establecer el tipo de contenido como JSON
        data: JSON.stringify(Bono), // Convertir la instancia de la clase a JSON
        success: function (data) {
            
        }
    });

}


function getDatos() {
    var TipoMoneda = $('#TipoMoneda').val();
    var Monto_Total = $('#Monto_Total').val();
    var Adelanto = $('#Adelanto').val();
    var Desembolso = $('#Desembolsado').val();
    var TipoTasa = $('#TipoTasa').val();
    var TiempoTasa = $('#TiempoTasa').val();
    var Tasa = $('#Tasa').val();
    var PeriodoGracia = $('#PeriodoGracia').val();
    var TipoPeriodoGracia = $('#TipoPeriodoGracia').val();
    var TiempoPeriodoGracia = $('#Tiempo_Periodo_Gracia').val();
    var PeriodoPagoPrestamo = $('#PeriodoPagoPrestamo').val();
    var TiempoPrestamo = $('#Tiempo_Prestamo').val();
    var TasaDegravamen = $('#Seguro_Degravamen').val();
    var TasaInmueble = $('#Seguro_Inmbueble').val();

    console.log("Funciona mrd");
    console.log(TipoMoneda);
    console.log(Monto_Total);
    console.log(Adelanto);
    console.log(Monto_Total);
    console.log(Desembolso);
    console.log(TipoTasa);
    console.log(TiempoTasa);
    console.log(Tasa);
    console.log(PeriodoGracia);
    console.log(TipoPeriodoGracia);
    console.log(PeriodoPagoPrestamo);
    console.log(TiempoPeriodoGracia);
    console.log(TiempoPrestamo);
    console.log(TasaDegravamen);
    console.log(TasaInmueble);



    //$.ajax({
    //    type: 'GET',
    //    url: '../CreateBono',
    //    mimeType: 'json',
    //    success: function (data) {
    //        console.log("hola");
    //        window.alert("Update it ")
    //    }
    //});
}
