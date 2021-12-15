function encode() {

    var selectedfile = document.getElementById('myinput').files;
    if (selectedfile.length > 0) {
        var imageFile = selectedfile[0];
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
            profilePicture = fileLoadedEvent.target.result;
            document.getElementById('target').src = profilePicture;
        }
        fileReader.readAsDataURL(imageFile);
    }
}

function update() {

    var updateUser = new XMLHttpRequest();

    updateUser.open("PUT", "/accountinfo", true);
    updateUser.setRequestHeader("Content-Type", "application/json");
    updateUser.onload = function() {

        $('#successModal').modal('show');
    }
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    address = document.getElementById("address").value;
    mobileNumber = document.getElementById("mobileNumber").value;
    emailAdd = document.getElementById("emailAdd").value;

    var payload = { token: token, firstName: firstName, lastName: lastName, address: address, mobileNumber: mobileNumber, profilePicture: profilePicture, emailAdd: emailAdd, }
    updateUser.send(JSON.stringify(payload));
}