$(document).ready(function username(){

    var token = sessionStorage.getItem("token");
    if (token != false) {
        var username = document.getElementById("usernamelogin").value;
        $(username).show();
    }
})

