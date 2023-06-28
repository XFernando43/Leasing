$(document).ready(function () {
    var dsh = {
        init: function () {
            dsh.LogginAccount();
            dsh.RegisterAccount();
        },
        LogginAccount() {
            $('#btn-sign').click(function () {
                validar();
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

function validar() {
    var userData = {
        Email: $('#Email').val(),
        Password: $('#Password').val(),
    };

    $.ajax({
        type: 'GET',
        url: '../GetUser_Login/' + userData.Email + '/' + userData.Password,
        mimeType: 'json',
        success: function (data) {
            console.log(data.user.result[0]);
            console.log(data.user.result[0].email + " " + data.user.result[0].password);
            if (data.user.result[0].email == userData.Email && data.user.result[0].password == userData.Password) {
                ButtonLoginStart();
            }
        }
    });
}