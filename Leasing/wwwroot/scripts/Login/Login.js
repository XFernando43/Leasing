$(document).ready(function () {
    var dsh = {
        init: function () {
            dsh.LogginAccount();
            dsh.RegisterAccount();
        },
        LogginAccount() {
            $('#btn-sign').click(function () {
                ButtonLoginStart();
            })
        },
        RegisterAccount() {
            $('#btn-register').click(function () {
                ButtonRedigirRegister();
            })
        }
    }
    dsh.init();
});

function getId() {
    var id = $('#Id_container').text();
    return id;
}

function ButtonLoginStart() {
    window.location.href = "/Bono/TablaBonoViews";   
}

function ButtonRedigirRegister() {
    window.location.href = "/Login/RegisterView";   
}