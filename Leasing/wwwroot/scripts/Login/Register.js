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

function ButtonRedirigirLogin() {
    window.location.href = "/Login/LoginView";
}

function ButtonRedigirRegister() {
    createUser();
}

function createUser() {
    var userData = {
        ID:1,
        Name: $('#name').val(),
        LastName: $('#lastName').val(),
        Email: $('#Email').val(),
        Password: $('#Password').val(),
        Telefono: $('#telefono').val(),
    };

    var edad = $('#Edad').val();
    if (edad < 18 || edad == null) {
        toastr.error('¡Debes ser mayor de edad!');
        toastr.error('¡Usuario no creado!');

    } else {
        $.ajax({
            type: 'POST',
            url: '../CreateUser',
            contentType: 'application/json',
            data: JSON.stringify(userData),
            success: function (data) {
                console.log(data);
                toastr.success('¡Usuario creado con éxito!');
            },
            error: function () {
                toastr.error('¡Usuario no creado!');
            }
        })
    }
    console.log(edad);

}

