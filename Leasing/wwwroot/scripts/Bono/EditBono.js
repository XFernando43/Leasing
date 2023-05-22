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
                        '<div class="mb-3"> <label class = "mb-3"> Tipo de Moneda</label> <input id="TipoMoneda" value="' + bono.tipo_moneda + '" class="form-control"/> </div>' +
                        '<div class="mb-3"> <label class = "mb-3"> Monto Total </label> <input id="Monto_Total" value="' + bono.monto_total + '" class="form-control"/> </div>' +
                        '<div class="mb-3"> <label class = "mb-3"> Adelanto </label> <input id="Adelanto" value="' + bono.adelanto + '" class="form-control"/> </div>' +
                        '<div class="mb-3"> <label class = "mb-3"> Monto Desembolsado </label> <input id="Desembolsado" value="' + bono.monto_Desembolsado + '" class="form-control"/> </div>' +
                        '<div class="mb-3"> <label class = "mb-3"> Tipo Tasa </label> <input id="TipoTasa" value="' + bono.tipo_tasa + '" class="form-control"/> </div>' +
                        '<div class="mb-3"> <label class = "mb-3"> Tiempo de Tasa </label> <input id="TiempoTasa" value="' + bono.tiempo_Tasa + '" class="form-control"/> </div>' +
                        '<div class="mb-3"> <label class = "mb-3"> Tasa% </label> <input id="Tasa" value="' + bono.tasa + '" class="form-control"/> </div>' +
                        '<div class="mb-3"> <label class = "mb-3"> Periodo de Gracia </label> <input id="PeriodoGracia" value="' + bono.periodo_gracia + '" class="form-control"/> </div>' +
                        '<div class="mb-3"> <label class = "mb-3"> Tipo Periodo Gracia </label> <input id="TipoPeriodoGracia" value="' + bono.tipo_periodo_gracia + '" class="form-control"/> </div>' 
                        
                    );
                })
            })
            console.log("caramba");
        },
        getBonoId() {
            $.getJSON('../getBono/1', function (data) {
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
    this.PrestamoId = $('#Id_container').text();
    this.Tipo_Moneda = $('#TipoMoneda').val();
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

function ActualizarBono() {
    var Bono = new ClaseBono();
    $.ajax({
        type: 'POST', // Cambiar a POST para enviar los datos en el cuerpo de la solicitud
        url: '../UpdateBono',
        contentType: 'application/json', // Establecer el tipo de contenido como JSON
        data: JSON.stringify(Bono), // Convertir la instancia de la clase a JSON
        success: function (data) {
            window.alert("Ridiculo");
            console.log("cobardes");
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