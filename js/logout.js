function logoutMe() {

    $('#registerMenu').show();
    $('#loginMenu').show();
    $('#logoutMenu').hide();
    $('#editMenu').hide();
    $(displayUser).hide();
    sessionStorage.removeItem("token");
}
