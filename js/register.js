function encode() {

    var selectedfile = document.getElementById('myinput').files;
    if (selectedfile.length > 0) {
        var imageFile = selectedfile[0];
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
            profilePicture = fileLoadedEvent.target.result;
            document.getElementById('targets').src = profilePicture;
        }
        fileReader.readAsDataURL(imageFile);
    }
}

function registerMe() {

    var registerUser = new XMLHttpRequest();

    registerUser.open("POST", "/user", true);
    registerUser.setRequestHeader("Content-Type", "application/json");
    registerUser.onload = function() {

        $('#registerModal').modal('hide');
        $('#successModal').modal('show');
    }
    var rusername = document.getElementById("rusername").value;
    var rpassword = document.getElementById("rpassword").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var gender = document.getElementById("gender").value;
    var raddress = document.getElementById("raddress").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var emailAdd = document.getElementById("emailAdd").value;

    var payload = { username: rusername, password: rpassword, firstName: firstName, lastName: lastName, gender: gender, address: raddress, mobileNumber: mobileNumber, profilePicture: profilePicture, emailAdd: emailAdd }
    registerUser.send(JSON.stringify(payload));
}