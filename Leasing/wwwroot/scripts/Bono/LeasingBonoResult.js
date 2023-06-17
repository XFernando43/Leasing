$(document).ready(function () {
    var dsh = {
        init: function () {
            dsh.RellenarTabla();
            dsh.GetDatosPrestamo();
            dsh.Calcular_Leasing();

            dsh.Calcular_Datos_Resultantes();
        },
        Calcular_Datos_Resultantes() {
            $('#btn-note1').click(function () {
                obtenerDatosPrestamo(getId());
            });
        },
        Calcular_Leasing() {
            $('#btn2').click(function () {
                ObetenerDatos(getId());
            });
        },
        RellenarTabla() {
    
        },
        GetDatosPrestamo() {
            console.log("ACA:");
            GetLeasingNote1(getId());
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

function obtenerDatosPrestamo(id) {
    $.getJSON('../getBono/' + id, function (data) {
        console.log(data.bonos.result);
        const prestamo = new ClasePrestamo();
        prestamo.ID = data.bonos.result[0].id;
        prestamo.PrecioVentaActivo = data.bonos.result[0].precioVentaActivo;
        prestamo.CuotaInicial = data.bonos.result[0].cuotaInicial;
        prestamo.N_Anios = data.bonos.result[0].n_Anios;
        prestamo.Frecuencia_Pago = data.bonos.result[0].frecuencia_Pago;
        prestamo.N_Dias_Anios = data.bonos.result[0].n_Dias_Anios;
        prestamo.Costos_Notariales = data.bonos.result[0].costos_Notariales;
        prestamo.Costes_Registrales = data.bonos.result[0].costes_Registrales;
        prestamo.Tasacion = data.bonos.result[0].tasacion;
        prestamo.Comision_Estudio = data.bonos.result[0].comision_Estudio;
        prestamo.Comision_Activacion = data.bonos.result[0].comision_Activacion;
        prestamo.Comision_Periodo = data.bonos.result[0].comision_Periodo;
        prestamo.portes = data.bonos.result[0].portes;
        prestamo.Gastos_Administracion = data.bonos.result[0].gastos_Administracion;
        prestamo.Seguro_Degravament = data.bonos.result[0].seguro_Degravament;
        prestamo.Seguro_Riesgo = data.bonos.result[0].seguro_Riesgo;
        prestamo.Tasa_Descuento = data.bonos.result[0].tasa_Descuento;
        prestamo.User_ID = data.bonos.result[0].id;
        console.log(prestamo);
        PostLeasingResult1(prestamo);
        console.log("aca 2");
        PostLeasingTableResult(prestamo)
    });
}

function PostLeasingResult1(prestamo_class) {
    $.ajax({
        type: 'POST', // Cambiar a POST para enviar los datos en el cuerpo de la solicitud
        url: '../PostLeasing1',
        contentType: 'application/json', // Establecer el tipo de contenido como JSON
        data: JSON.stringify(prestamo_class), // Convertir la instancia de la clase a JSON
        success: function (data) {

        }
    });
}

function GetLeasingNote1(id) {
    $.getJSON('../getLeasing1/' + id, function (data) {

        console.log(data.note1.result[0]);
    });
}

function ObetenerDatos(id) {
    $.getJSON('../getBono/' + id, function (data) {
        console.log("funcion 2");
        const prestamo = new ClasePrestamo();
        prestamo.ID = data.bonos.result[0].id;
        prestamo.PrecioVentaActivo = data.bonos.result[0].precioVentaActivo;
        prestamo.CuotaInicial = data.bonos.result[0].cuotaInicial;
        prestamo.N_Anios = data.bonos.result[0].n_Anios;
        prestamo.Frecuencia_Pago = data.bonos.result[0].frecuencia_Pago;
        prestamo.N_Dias_Anios = data.bonos.result[0].n_Dias_Anios;
        prestamo.Costos_Notariales = data.bonos.result[0].costos_Notariales;
        prestamo.Costes_Registrales = data.bonos.result[0].costes_Registrales;
        prestamo.Tasacion = data.bonos.result[0].tasacion;
        prestamo.Comision_Estudio = data.bonos.result[0].comision_Estudio;
        prestamo.Comision_Activacion = data.bonos.result[0].comision_Activacion;
        prestamo.Comision_Periodo = data.bonos.result[0].comision_Periodo;
        prestamo.portes = data.bonos.result[0].portes;
        prestamo.Gastos_Administracion = data.bonos.result[0].gastos_Administracion;
        prestamo.Seguro_Degravament = data.bonos.result[0].seguro_Degravament;
        prestamo.Seguro_Riesgo = data.bonos.result[0].seguro_Riesgo;
        prestamo.Tasa_Descuento = data.bonos.result[0].tasa_Descuento;
        prestamo.User_ID = data.bonos.result[0].id;

        console.log("Los resultados de la tabla");
        PostLeasingTableResult(prestamo)

        console.log("ACA se rellena la tabla");
        LlenarTablaLeasing(prestamo);
    });
}

function PostLeasingTableResult(prestamo_class) {
    $.ajax({
        type: 'POST', // Cambiar a POST para enviar los datos en el cuerpo de la solicitud
        url: '../LeasingProcess',
        contentType: 'application/json', // Establecer el tipo de contenido como JSON
        data: JSON.stringify(prestamo_class), // Convertir la instancia de la clase a JSON
        success: function (data) {
            console.log("data");
            console.log(data);
        }
    });
}

function LlenarTablaLeasing(prestamo_class) {

    $.ajax({
        type: 'POST',
        url: '../LeasingProcess',
        contentType: 'application/json',
        data: JSON.stringify(prestamo_class),
        success: function (data) {
            $.each(data.leasing.result, function (i, data) {

                var body = "<tr>";
                // Acciones
                body += '<td class="mb-auto text-center">' + data.n + '</td>';
                body += '<td class="mb-auto text-center">' + data.tea + '</td>';
                body += '<td class="mb-auto text-center">' + data.tem + '</td>';
                body += '<td class="mb-auto text-center">' + data.ia + '</td>';
                body += '<td class="mb-auto text-center">' + data.ip + '</td>';
                body += '<td class="mb-auto text-center">' + data.pg + '</td>';
                body += '<td class="mb-auto text-center">' + data.saldoInicial + '</td>';
                body += '<td class="mb-auto text-center">' + data.saldoInicialIndexado + '</td>';
                body += '<td class="mb-auto text-center">' + data.interes + '</td>';
                body += '<td class="mb-auto text-center">' + data.cuota + '</td>';
                body += '<td class="mb-auto text-center">' + data.amort + '</td>';
                body += '<td class="mb-auto text-center">' + data.prepago + '</td>';
                body += '<td class="mb-auto text-center">' + data.seguro_Degrav + '</td>';
                body += '<td class="mb-auto text-center">' + data.seguro_Riesgo + '</td>';
                body += '<td class="mb-auto text-center">' + data.comision + '</td>';
                body += '<td class="mb-auto text-center">' + data.portes + '</td>';
                body += '<td class="mb-auto text-center">' + data.gastosAdm + '</td>';
                body += '<td class="mb-auto text-center">' + data.saldo_Final + '</td>';
                body += '<td class="mb-auto text-center">' + data.flujo + '</td>';

                body += "</tr>";
                $("#Leasing-Table tbody").append(body);
            });
        },
        error: function () {
            alert('Fail!');
        }
    });


}