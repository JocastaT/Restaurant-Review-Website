function loginMe() {

    var loginUser = new XMLHttpRequest();

    loginUser.open("POST", "/login", true);
    loginUser.setRequestHeader("Content-Type", "application/json");
    loginUser.onload = function() {

        $('#loginModal').modal('hide');

        var token = JSON.parse(loginUser.responseText);
        console.log(token.result);
        if (token.result != false) {
            alert('Welcome ' + username + '!');

            $('#successModal').modal('show');
            document.getElementById("registerMenu").style.display = "none";
            document.getElementById("loginMenu").style.display = "none";
            document.getElementById("logoutMenu").style.display = "block";
            document.getElementById("editMenu").style.display = "block";
            document.getElementById("displayUser").style.display = "block";
            document.getElementById("displayUser").innerHTML = username;
            sessionStorage.setItem("token", token.result);
        } else {
            alert('User Not Found');

            $('#failModal').modal('show');
        }
    }

    var username = document.getElementById("usernamelogin").value;
    var password = document.getElementById("passwordlogin").value;
    var payload = { username: username, password: password }
    loginUser.send(JSON.stringify(payload));
}