$(document).ready(function () {
    var dsh = {
        init: function () {
            dsh.CreateBonoHttp();
            dsh.CreateBonoTest();

        },
        PostBono() {

        },
        CreateBonoHttp() {
            $('#ButtonCreate').click(function () {
                console.log("Pirata");
                CreateBono();
            });
        },
        CreateBonoTest() {
            $('#ButtonTest').click(function () {
                console.log("Pirata");
                CreateBonoTest();
            });
        }

    }
    dsh.init();
});

function ClaseBono() {
    this.ID = $('#PCVA').val();
    this.PrecioVentaActivo = $('#PCVA').val();
    this.CuotaInicial = $('#C_I').val();
    this.N_Anios = $('#N_A').val();
    this.Frecuencia_Pago = $('#FP').val();
    this.Numero_DiasXAño = $('#NDXA').val();
    this.Costos_Notariales = $('#Cost_N').val();
    this.Costes_Registrales = $('#C_R').val();
    this.Tasacion = $('#Tasacion').val();
    this.Comision_Estudio = $('#C_E').val();
    this.Comision_Activacion = $('#C_A').val();
    this.Comision_Periodo = $('#Com_Pe').val();
    this.portes = $('#Portes').val();
    this.Gastos_Administracion = $('#GA_AD').val();
    this.Seguro_Degravament = $('#S_DV').val();
    this.Seguro_Riesgo = $('#S_R').val();
    this.Tasa_Descuento = $('#T_D').val();
    this.User_ID = $('#T_D').val();
}

function CreateBonoTest() {
    console.log("datos de la clase");
    var Bono = new ClaseBono();

    console.log(Bono.ID);
    console.log(Bono.PrecioVentaActivo);
    console.log(Bono.CuotaInicial);
    console.log(Bono.N_Anios);
    console.log(Bono.Frecuencia_Pago);
    console.log(Bono.N_Dias_Anio);
    console.log(Bono.Costos_Notariales);
    console.log(Bono.Costes_Registrales);
    console.log(Bono.Tasacion);
    console.log(Bono.Comision_Estudio);
    console.log(Bono.Comision_Activacion);
    console.log(Bono.Comision_Periodo);
    console.log(Bono.portes);
    console.log(Bono.Gastos_Administracion);
    console.log(Bono.Seguro_Degravament);
    console.log(Bono.Seguro_Riesgo);
    console.log(Bono.Tasa_Descuento);
    console.log(Bono.User_ID);

    console.log("ACA LOS DATOS JALADOS");
    console.log("CLASE: ", Bono);

    $.ajax({
        type: 'POST', // Cambiar a POST para enviar los datos en el cuerpo de la solicitud
        url: '../CreateBono5555',
        contentType: 'application/json', // Establecer el tipo de contenido como JSON
        data: JSON.stringify(Bono), // Convertir la instancia de la clase a JSON
        success: function (data) {

        }
    });
}

function CreateBono() {
    console.log("datos de la clase");
    var Bono = new ClaseBono();
    console.log(Bono.ID);
    console.log(Bono.PrecioVentaActivo);
    console.log(Bono.CuotaInicial);
    console.log(Bono.N_Anios);
    console.log(Bono.Frecuencia_Pago);
    console.log(Bono.N_Dias_Anio);
    console.log(Bono.Costos_Notariales);
    console.log(Bono.Costes_Registrales);
    console.log(Bono.Tasacion);
    console.log(Bono.Comision_Estudio);
    console.log(Bono.Comision_Activacion);
    console.log(Bono.Comision_Periodo);
    console.log(Bono.portes);
    console.log(Bono.Gastos_Administracion);
    console.log(Bono.Seguro_Degravament);
    console.log(Bono.Seguro_Riesgo);
    console.log(Bono.Tasa_Descuento);
    console.log(Bono.User_ID);

    console.log("ACA LOS DATOS JALADOS");
    console.log("CLASE: ", Bono);

    $.ajax({
        type: 'POST', // Cambiar a POST para enviar los datos en el cuerpo de la solicitud
        url: '../CreateBono',
        contentType: 'application/json', // Establecer el tipo de contenido como JSON
        data: JSON.stringify(Bono), // Convertir la instancia de la clase a JSON
        success: function (data) {

        }
    });

}


