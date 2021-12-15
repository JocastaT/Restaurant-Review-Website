function deleteMe() {

    var deleteUser = new XMLHttpRequest();

    deleteUser.open("DELETE", "/delete", true);
    deleteUser.setRequestHeader("Content-Type", "application/json");
    deleteUser.onload = function() {
        alert('Are you sure you want to delete this account?');

        $('#registerMenu').show();
        $('#loginMenu').show();
        $('#logoutMenu').hide();
        $('#editMenu').hide();
        sessionStorage.removeItem("token");
        $('#successModal').modal('show');

    }
    var payload = { token: token }
    deleteUser.send(JSON.stringify(payload));
}