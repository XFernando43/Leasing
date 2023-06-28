$(document).ready(function () {
    var dsh = {
        init: function () {
            welcom();
            dsh.getBonos();
            dsh.getBonosHttp(getId());
            dsh.ButtonAgregar();
        },
        getBonosHttp(id) {
            $(document).ready(function () {
                $.ajax({
                    type: 'GET',
                    url: '../getPrestamos/' + id,
                    mimeType: 'json',
                    success: function (data) {
                        $.each(data.prestamos.result, function (i, data) {
                            var body = "<tr>";

                            //aciones 
                            body += "<td class='d-flex justify-content-center'>"
                                + '<div onclick="ButtonRedirigir(' + data.id + ');" class="btn btn-dark" id="btn_edit"><i id="icon" class="bi bi-pen-fill"></i></div>'
                                + '<span style="margin-right: 10px;"></span>'
                                + '<div onclick="ButtonRedirigirTablaLeasing(' + data.id + ');" class="btn btn-danger" id="btn_edit"><i id="icon" class="bi bi-bank2"></i></div>'
                                + "</td>";

                            body += '<td class="mb-auto text-center">' + data.id + '</td>';
                            body += '<td class="mb-auto text-center">' + data.precioVentaActivo + '</td>';
                            body += '<td class="mb-auto text-center">' + data.cuota_inicial + '</td>';
                            body += '<td class="mb-auto text-center">' + data.n_Anios + '</td>';
                            body += '<td class="mb-auto text-center">' + data.frecuencia_Pago + '</td>';
                            body += '<td class="mb-auto text-center">' + data.tasa + '</td>'; 
                            body += '<td class="mb-auto text-center">' + data.periodo_Capitalización + '</td>'; 
                            
                            body += "</tr>";
                            $("#table-Bonos tbody").append(body);
                        });
                        var table = $("#table-Bonos").DataTable({ fixedColumns: true, responsive: true });
                    },
                    error: function () {
                        alert('Fail!');
                    }
                });
            });


        },
        getBonos() {
            $.getJSON('../getPrestamos', function (data) {
                console.log(data);
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


function welcom() {
    toastr.success('¡Bienvenido Logeo Exitoso!');
}            