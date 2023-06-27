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

class ClasePrestamo {
    constructor() {
        this.ID = 1;
        this.PrecioVentaActivo = 1;
        this.CuotaInicial = 1;
        this.N_Anios = 1;
        this.Frecuencia_Pago = 1;
        this.N_Dias_Anios = 1;
        this.Costos_Notariales = 1;
        this.Costes_Registrales = 1;
        this.Tasacion = 1;
        this.Comision_Estudio = 1;
        this.Comision_Activacion = 1;
        this.Comision_Periodo = 1;
        this.portes = 1;
        this.Gastos_Administracion = 1;
        this.Seguro_Degravament = 1;
        this.Seguro_Riesgo = 1;
        this.Tasa_Descuento = 1;
        this.User_ID = 1;
    }
}

class LeasingNote1 {
    constructor() {
        this.Intereses;
        this.Amortización_del_capital;
        this.Seguro_de_desgravamen;
        this.Seguro_contra_todo_riesgo;
        this.Comisiones_periodicas;
        this.Portes_Gastos_adm;
    }
}

function obtenerDatosPrestamo(id) {  /////////// ACA
    $.getJSON('../getBono/' + id, function (data) {
        console.log(data.bonos.result[0]);
        var prestamo = data.bonos.result[0];

        console.log("Datos del prestamo: ");
        console.log(prestamo.precioVentaActivo);
        console.log(prestamo.cuotaInicial);
        console.log(prestamo.n_Anios);
        console.log(prestamo.frecuencia_Pago);
        console.log(prestamo.tasa_Descuento);

        crearTabla(prestamo);

    });
}

function crearTabla(Datos) {
    var pcva = Datos.precioVentaActivo;
    var ci = Datos.cuotaInicial / 100;
    var na = Datos.n_Anios;
    var fp = Datos.frecuencia_Pago;
    var tasa = Datos.tasa_Descuento;

    var cuota = pcva * (1 - ci) * ((tasa * Math.pow(1 + tasa, na * fp)) / (Math.pow(1 + tasa, na * fp) - 1));
    var saldoInicial = pcva * (1 - ci);

    var tableBody = document.getElementById("Leasing-Table").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";


    for (var i = 1; i <= na * fp; i++) {
        var row = tableBody.insertRow();

        var numeroCuotaCell = row.insertCell(0);
        numeroCuotaCell.innerHTML = i;

        var tasaCell = row.insertCell(1);
        tasaCell.innerHTML = tasa.toFixed(2);

        var saldoInicialCell = row.insertCell(2);
        saldoInicialCell.innerHTML = saldoInicial.toFixed(2);

        var intereses = saldoInicial * tasa;
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

    var datatable = $('#Leasing-Table').DataTable({ fixedColumns: true, responsive: true });
}


