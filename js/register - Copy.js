function deleteMe() {

    var deleteUser = new XMLHttpRequest();

    deleteUser.open("DELETE", "/delete", true);
    deleteUser.setRequestHeader("Content-Type", "application/json");
    deleteUser.onload = function () {

        $('#successModal').modal('show');
    }
    var dusername = document.getElementById("dusername").value;
    var dpassword = document.getElementById("dpassword").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var gender = document.getElementById("gender").value;
    var daddress = document.getElementById("daddress").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var profilePicture = document.getElementById("profilePicture").value;
    var emailAdd = document.getElementById("emailAdd").value;

    var payload = { username: dusername, password: dpassword, firstName: firstName, lastName: lastName, gender: gender, address: daddress, mobileNumber: mobileNumber, profilePicture: profilePicture,emailAdd: emailAdd}
    deleteUser.send(JSON.stringify(payload));
}