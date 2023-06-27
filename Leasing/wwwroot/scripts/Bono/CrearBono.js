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

function ClaseBono() {

    this.PrecioVentaActivo = $('#PCVA').val();
    this.CuotaInicial = $('#C_I').val();
    this.N_Anios = $('#N_A').val();
    this.Frecuencia_Pago = $('#FP').val();
    this.Tasacion = $('#Tasa').val();
    this.Tasa_Descuento = $('#Tasa').val();

}

function CreateBonoTest() {
    console.log("datos de la clase");
    var Bono = new ClaseBono();


    console.log("ACA LOS DATOS JALADOS");
  

    //$.ajax({
    //    type: 'POST', // Cambiar a POST para enviar los datos en el cuerpo de la solicitud
    //    url: '../CreateBono5555',
    //    contentType: 'application/json', // Establecer el tipo de contenido como JSON
    //    data: JSON.stringify(Bono), // Convertir la instancia de la clase a JSON
    //    success: function (data) {
    //        console.log(data);
    //    }
    //});
}

function CreateBono() {
    console.log("datos de la clase");
    var Bono = new ClaseBono();


    console.log("ACA LOS DATOS JALADOS");
    console.log("Precio de venta Activo: "+Bono.PrecioVentaActivo);
    console.log("% Cuota Inicial: " + Bono.CuotaInicial);
    console.log("N años: " + Bono.N_Anios);
    console.log("Frecuencia de pagos: " + Bono.Frecuencia_Pago);
    console.log("Tasacion: " + Bono.Tasacion);
    console.log("Tasa de Descuento: " + Bono.Tasa_Descuento);
    $.ajax({
        type: 'POST', // Cambiar a POST para enviar los datos en el cuerpo de la solicitud
        url: '../CreateBono',
        contentType: 'application/json', // Establecer el tipo de contenido como JSON
        data: JSON.stringify(Bono), // Convertir la instancia de la clase a JSON
        success: function (data) {
            console.log(data);
            window.location.href = "../Bono/TablaBonoViews";
        }
    });

}


