$(document).ready(function () {
    var dsh = {
        init: function () {
            dsh.GetDatosPrestamo();
        },
        GetDatosPrestamo() {
            obtenerDatosPrestamo(getId());
        }
    }
    dsh.init();
});

function getId() {
    var id = $('#id_box').text();
    return id;
}

function obtenerDatosPrestamo(id) {  /////////// ACA
    $.getJSON('../getPrestamos/' + id, function (data) {
        console.log(data.prestamo.result[0]);

        var prestamo = data.prestamo.result[0];

        console.log("Datos del prestamo: ");
        crearTabla(prestamo);

    });
}

function crearTabla(Datos) {
    var pcva = Datos.precioVentaActivo;
    var ci = Datos.cuota_inicial / 100;
    var na = Datos.n_Anios;
    var fp = Datos.frecuencia_Pago;
    var tasa = Datos.tasa;
    tasa = tasa / 100;

    var tipoTasa = Datos.tipo_Tasa; // Obtener el valor del campo de selección del tipo de tasa
    var frecuenciaTasa = Datos.frecuencia_tasa; // Obtener el valor del campo de frecuencia de tasa
    var periodoCapitalizacion = Datos.periodo_Capitalización; // Obtener el valor del campo de período de capitalización

    var periodoGracia = Datos.periodo_gracia;
    var numeroPeriodos = Datos.n_periodos_gracia;


    console.log(pcva, ci, na, fp, tasa, tipoTasa, frecuenciaTasa, periodoCapitalizacion, periodoGracia, numeroPeriodos);


    //calcular TasaEfecttivaPeriodo
    var TasaEfecttivaPeriodo;
    if (tipoTasa == 0) {
        TasaEfecttivaPeriodo = Math.pow(1 + tasa, fp / frecuenciaTasa) - 1;
        console.log("entro primera opcion", TasaEfecttivaPeriodo);
    } else if (tipoTasa == 1) {
        var m = frecuenciaTasa / periodoCapitalizacion;
        var TEP = Math.pow(1 + (tasa / m), m) - 1
        TasaEfecttivaPeriodo = Math.pow((1 + TEP), fp / frecuenciaTasa) - 1;

        console.log(TEP, m);

        //var base = 1 + (tasa / (frecuenciaTasa / periodoCapitalizacion));
        //var exponente = 360 / periodoCapitalizacion;
        //TasaEfecttivaPeriodo=Math.pow(base,exponente)-1;
        //TasaEfecttivaPeriodo=Math.pow((1+(tasa/(frecuenciaTasa/periodoCapitalizacion))),(360/periodoCapitalizacion))-1;
    }
    //TasaEfecttivaPeriodo=Math.pow((1+(TasaEfecttivaPeriodo)),(fp/360))-1;


    var nrocuotas = na * (360 / fp);
    var cuota = pcva * (1 - ci) * ((TasaEfecttivaPeriodo * Math.pow(1 + TasaEfecttivaPeriodo, nrocuotas)) / (Math.pow(1 + TasaEfecttivaPeriodo, nrocuotas) - 1));
    var saldoInicial = pcva * (1 - ci);
    var tableBody = document.getElementById("Leasing-Table").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";
    i = 1;



    for (var i; i <= nrocuotas; i++) {
        if (periodoGracia == 1 && i <= numeroPeriodos) {
            cuota = 0;
            for (var i; i <= numeroPeriodos; i++) {
                var row = tableBody.insertRow();

                var numeroCuotaCell = row.insertCell(0);
                numeroCuotaCell.innerHTML = i;

                var tasaCell = row.insertCell(1);
                tasaCell.innerHTML = (TasaEfecttivaPeriodo * 100).toFixed(7);

                var saldoInicialCell = row.insertCell(2);
                saldoInicialCell.innerHTML = saldoInicial.toFixed(2);

                var intereses = saldoInicial * TasaEfecttivaPeriodo;
                var interesesCell = row.insertCell(3);
                interesesCell.innerHTML = intereses.toFixed(2);

                var cuotaCell = row.insertCell(4);
                cuotaCell.innerHTML = cuota.toFixed(2);

                var amortizacion = 0;
                var amortizacionCell = row.insertCell(5);
                amortizacionCell.innerHTML = amortizacion.toFixed(2);

                var saldoFinal = saldoInicial + intereses;
                var saldoFinalCell = row.insertCell(6);
                saldoFinalCell.innerHTML = saldoFinal.toFixed(2);
                saldoInicial = saldoFinal;
                if (i === numeroPeriodos) {
                    cuota = saldoFinal * ((TasaEfecttivaPeriodo * Math.pow(1 + TasaEfecttivaPeriodo, (nrocuotas) - i)) / (Math.pow(1 + TasaEfecttivaPeriodo, (nrocuotas) - i) - 1));
                }
            }
        }
        if (periodoGracia == 2 && i <= numeroPeriodos) {

            for (var i; i <= numeroPeriodos; i++) {
                intereses = saldoInicial * TasaEfecttivaPeriodo;
                cuota = intereses;
                var row = tableBody.insertRow();

                var numeroCuotaCell = row.insertCell(0);
                numeroCuotaCell.innerHTML = i;

                var tasaCell = row.insertCell(1);
                tasaCell.innerHTML = (TasaEfecttivaPeriodo * 100).toFixed(7);

                var saldoInicialCell = row.insertCell(2);
                saldoInicialCell.innerHTML = saldoInicial.toFixed(2);

                var intereses = saldoInicial * TasaEfecttivaPeriodo;
                var interesesCell = row.insertCell(3);
                interesesCell.innerHTML = intereses.toFixed(2);

                var cuotaCell = row.insertCell(4);
                cuotaCell.innerHTML = cuota.toFixed(2);

                var amortizacion = 0;
                var amortizacionCell = row.insertCell(5);
                amortizacionCell.innerHTML = amortizacion.toFixed(2);

                var saldoFinal = saldoInicial;
                var saldoFinalCell = row.insertCell(6);
                saldoFinalCell.innerHTML = saldoFinal.toFixed(2);
                saldoInicial = saldoFinal;
                if (i === numeroPeriodos) {
                    cuota = saldoFinal * ((TasaEfecttivaPeriodo * Math.pow(1 + TasaEfecttivaPeriodo, (nrocuotas) - i)) / (Math.pow(1 + TasaEfecttivaPeriodo, (nrocuotas) - i) - 1));
                }
            }
        }
        var row = tableBody.insertRow();

        var numeroCuotaCell = row.insertCell(0);
        numeroCuotaCell.innerHTML = i;

        var tasaCell = row.insertCell(1);
        tasaCell.innerHTML = (TasaEfecttivaPeriodo * 100).toFixed(7);

        var saldoInicialCell = row.insertCell(2);
        saldoInicialCell.innerHTML = saldoInicial.toFixed(2);

        var intereses = saldoInicial * TasaEfecttivaPeriodo;
        var interesesCell = row.insertCell(3);
        interesesCell.innerHTML = intereses.toFixed(2);

        var cuotaCell = row.insertCell(4);
        cuotaCell.innerHTML = cuota.toFixed(2);

        var amortizacion = cuota - intereses;
        var amortizacionCell = row.insertCell(5);
        amortizacionCell.innerHTML = amortizacion.toFixed(2);

        var saldoFinal = saldoInicial - amortizacion;
        var saldoFinalCell = row.insertCell(6);
        saldoFinalCell.innerHTML = saldoFinal.toFixed(2);

        saldoInicial = saldoFinal;

    }

}
   // var datatable = $('#Leasing-Table').DataTable({ fixedColumns: true, responsive: true });



