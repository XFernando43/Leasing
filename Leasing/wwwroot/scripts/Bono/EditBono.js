$(document).ready(function () {
    var dsh = {
        init: function () {
            dsh.getBonoId();
            dsh.CompleteForm(getId());
            dsh.ButtonUpdate();
            dsh.ButtonDelete();
        },
        CompleteForm(id) {
            $.getJSON('../getBono/'+id, function (data) {
                $.each(data.bonos.result, function (index, bono) {
                    $('#Edit-Form div').append(
                        '<div class="mb-3"> <label class = "mb-3"> Tipo de Moneda </label> <input id="TipoMoneda" value="' + bono.precioVentaActivo + '" class="form-control"/> </div>' +
                        '<div class="mb-3"> <label class = "mb-3"> Cuota Inicial </label> <input id="Monto_Total" value="' + bono.cuotaInicial + '" class="form-control"/> </div>' +
                        '<div class="mb-3"> <label class = "mb-3"> Numero de Años </label> <input id="Adelanto" value="' + bono.n_Anios + '" class="form-control"/> </div>' +
                        '<div class="mb-3"> <label class = "mb-3"> Frecuencia de Pago </label> <input id="Desembolsado" value="' + bono.frecuencia_Pago + '" class="form-control"/> </div>' +
                        '<div class="mb-3"> <label class = "mb-3"> Numero Dias por Año </label> <input id="TipoTasa" value="' + bono.n_Dias_Anios + '" class="form-control"/> </div>' +
                        '<div class="mb-3"> <label class = "mb-3"> Costos Notariales </label> <input id="TipoTasa" value="' + bono.costos_Notariales + '" class="form-control"/> </div>' +
                        '<div class="mb-3"> <label class = "mb-3"> Costos Registrales </label> <input id="TipoTasa" value="' + bono.costes_Registrales + '" class="form-control"/> </div>' +
                        '<div class="mb-3"> <label class = "mb-3"> Tasacion </label> <input id="TipoTasa" value="' + bono.tasacion + '" class="form-control"/> </div>' +
                        '<div class="mb-3"> <label class = "mb-3"> Comision de Estudio </label> <input id="TipoTasa" value="' + bono.comision_Estudio + '" class="form-control"/> </div>' +
                        '<div class="mb-3"> <label class = "mb-3"> Comision de Activación </label> <input id="TipoTasa" value="' + bono.comision_Activacion + '" class="form-control"/> </div>' +
                        '<div class="mb-3"> <label class = "mb-3"> Comision de Periodo </label> <input id="TipoTasa" value="' + bono.comision_Periodo + '" class="form-control"/> </div>' +
                        '<div class="mb-3"> <label class = "mb-3"> Portes </label> <input id="TipoTasa" value="' + bono.portes + '" class="form-control"/> </div>' +
                        '<div class="mb-3"> <label class = "mb-3"> Gastos de Administracion </label> <input id="TipoTasa" value="' + bono.gastos_Administracion + '" class="form-control"/> </div>' +
                        '<div class="mb-3"> <label class = "mb-3"> Seguro de Degravament </label> <input id="TiempoTasa" value="' + bono.seguro_Degravament + '" class="form-control"/> </div>' +
                        '<div class="mb-3"> <label class = "mb-3"> Seguro de Riesgo </label> <input id="Tasa" value="' + bono.seguro_Riesgo + '" class="form-control"/> </div>' +
                        '<div class="mb-3"> <label class = "mb-3"> Tasa de Descuento </label> <input id="PeriodoGracia" value="' + bono.tasa_Descuento + '" class="form-control"/> </div>' 
                        
                    );
                })
            })
            console.log("caramba");
        },
        getBonoId() {
            $.getJSON('../getBono/75', function (data) {
                console.log(data.bonos.result);
            });
        },
        ButtonUpdate() {
            $('#Actualizar').click(function () {
                console.log("Pirata");

                ActualizarBono();
            });
        },
        ButtonDelete() {
            $('#Delete').click(function () {
                console.log("Eliminar");

                DeleteBono();
            });
        }

    }
    dsh.init();
});

function getId() {
    var id = $('#Id_container').text();
    return id;
}

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

function ActualizarBono() {
    var Bono = new ClaseBono();
    $.ajax({
        type: 'POST', // Cambiar a POST para enviar los datos en el cuerpo de la solicitud
        url: '../UpdateBono',
        contentType: 'application/json', // Establecer el tipo de contenido como JSON
        data: JSON.stringify(Bono), // Convertir la instancia de la clase a JSON
        success: function (data) {

            window.location.href = "../Bono/TablaBonoViews";
        }
    });
}

function DeleteBono() {

    $.ajax({
        type: 'DELETE', // Cambiar a POST para enviar los datos en el cuerpo de la solicitud
        url: '../DeleteBono/'+getId(),
        contentType: 'application/json', // Establecer el tipo de contenido como JSON
        success: function (data) {
            window.location.href = "../Bono/TablaBonoViews";
        }
    });
}