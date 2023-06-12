$(document).ready(function () {
    var dsh = {
        init: function () {
            dsh.BackToLogin();
            dsh.RegisterAccount();
        },
        BackToLogin() {
            $('#btn-back').click(function () {
                ButtonRedirigirLogin();
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

function ButtonRedirigirLogin() {
    window.location.href = "/Login/LoginView";
}

function ButtonRedigirRegister() {
    window.location.href = "/Login/RegisterView";
    //window.alert("COMas");
}