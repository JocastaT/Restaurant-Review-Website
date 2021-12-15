function deleteAccounts() {

    var deleteUser = new XMLHttpRequest();

    deleteUser.open("DELETE", "/deleteuser/:username", true);
    deleteUser.setRequestHeader("Content-Type", "application/json");
    deleteUser.onload = function () {

        $('#registerModal').modal('show');

        var token = JSON.parse(loginUser.responseText);
        console.log(token.result);
        if (token.result != false) {
            
            $('#successModal').modal('show');
            document.getElementById("registerMenu").style.display = "block";
            document.getElementById("loginMenu").style.display = "block";
            document.getElementById("logoutMenu").style.display = "none";
            document.getElementById("editMenu").style.display = "none";
            document.getElementById("usernamelogin").style.display = "none";
            sessionStorage.setItem("token", token.result);
        } else {

            $('#failModal').modal('show');
        }
    }
}
