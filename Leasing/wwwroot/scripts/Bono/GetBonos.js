$(document).ready(function () {
    var dsh = {
        init: function () {
            dsh.getBonos();
            dsh.getBonosHttp(getId());
        },
        getBonosHttp(id) {
            $(document).ready(function () {
                $.ajax({
                    type: 'GET',
                    url: '../GetBonos/'+id,
                    mimeType: 'json',
                    success: function (data) {
                        $.each(data.bonos.result, function (i, data) {
                            var body = "<tr>";
                           
                            //aciones 
                            body += "<td>" + '<div onclick="ButtonRedirigir('+data.idPrestamo+');" class = "btn btn-outline-primary" id = "btn_edit"> <i id= "icon" class="bi bi-pen-fill"></i > EDITAR </div >' + "</td>";
                            body += '<td class="mb-auto text-center">' + data.idPrestamo + '</td>';
                            body += '<td class="mb-auto text-center">' + data.tipo_moneda + '</td>';
                            body += '<td class="mb-auto text-center">' + data.monto_total + '</td>';
                            body += '<td class="mb-auto text-center">' + data.adelanto + '</td>';
                            body += '<td class="mb-auto text-center">' + data.monto_Desembolsado + '</td>';
                            body += '<td class="mb-auto text-center">' + data.tipo_tasa + '</td>';
                            body += '<td class="mb-auto text-center">' + data.tiempo_Tasa + '</td>';
                            body += '<td class="mb-auto text-center">' + data.tasa + '</td>';
                         
                           
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
        }
    }
    dsh.init();
});

function getId() {
    var id = $('#Id_container').text();
    return id;
}

function ButtonRedirigir(id) {
    window.location.href = "/Bono/BonoIdViews?id="+id;
    //console.log("caramba: " + id);
    
    //$.getJSON('/getBonoId', function (data) {
    //    console.log(data);
    //});
}