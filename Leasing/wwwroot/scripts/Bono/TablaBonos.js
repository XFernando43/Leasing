$(document).ready(function () {
    var dsh = {
        init: function () {
            dsh.getBonos();
            dsh.getBonosHttp(getId());
            dsh.ButtonAgregar();
        },
        getBonosHttp(id) {
            $(document).ready(function () {
                $.ajax({
                    type: 'GET',
                    url: '../GetBonos/' + id,
                    mimeType: 'json',
                    success: function (data) {
                        $.each(data.bonos.result, function (i, data) {
                            var body = "<tr>";

                            //aciones 
                            body += "<td>" + '<div onclick="ButtonRedirigir(' + data.id + ');" class="btn btn-dark" id="btn_edit"><i id="icon" class="bi bi-pen-fill"></i></div>' +
                                '<span style="margin-right: 10px;"></span>' +
                                '<div onclick="ButtonRedirigirTablaLeasing(' + data.id + ');" class="btn btn-danger" id="btn_edit"><i id="icon" class="bi bi-bank2"></i></div>' + "</td>";
                            body += '<td class="mb-auto text-center">' + data.id + '</td>';
                            body += '<td class="mb-auto text-center">' + data.precioVentaActivo + '</td>';
                            body += '<td class="mb-auto text-center">' + data.n_Anios + '</td>';
                            body += '<td class="mb-auto text-center">' + data.frecuencia_Pago + '</td>';
                            body += '<td class="mb-auto text-center">' + data.n_Dias_Anios + '</td>';
                            body += '<td class="mb-auto text-center">' + data.costos_Notariales + '</td>';
                            body += '<td class="mb-auto text-center">' + data.costes_Registrales + '</td>';
                            
                            body += "</tr>";
                            $("#table-Bonos tbody").append(body);
                        });
                    },
                    error: function () {
                        alert('Fail!');
                    }
                });
            });


        },
        getBonos() {
            $.getJSON('../GetBonos', function (data) {
                console.log(data.bonos.result);
            });
        },
        ButtonAgregar() {
            $('#btn-agregar').click(function () {             
                ButtonCrearPrestamo();
            });
        }
    }
    dsh.init();
});

function getId() {
    var id = $('#Id_container').text();
    return id;
}

function ButtonRedirigir(id) {
    window.location.href = "/Bono/BonoIdViews?id=" + id;
}

function ButtonCrearPrestamo() {
    window.location.href = "/Bono/CreateBonoView";
}

function ButtonRedirigirTablaLeasing(id) {
    window.location.href = "/Bono/LeasingTableResultView?id=" + id;
}