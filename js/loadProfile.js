$(document).ready(function() {

    var getProfile = new XMLHttpRequest();

    getProfile.open("POST", "/accountinfo", true);
    getProfile.setRequestHeader("Content-Type", "application/json");
    getProfile.onload = function() {
        var profile = JSON.parse(getProfile.responseText);
        console.log(getProfile.responseText);

        firstName = profile[0].firstName;
        lastName = profile[0].lastName;
        address = profile[0].address;
        mobileNumber = profile[0].mobileNumber;
        profilePicture = profile[0].profilePicture;
        emailAdd = profile[0].emailAdd;


        document.getElementById('firstName').value = firstName;
        document.getElementById('lastName').value = lastName;
        document.getElementById('address').value = address;
        document.getElementById('mobileNumber').value = mobileNumber;
        document.getElementById('target').src = profilePicture;
        document.getElementById('emailAdd').value = emailAdd;
    }

    var payload = { token: token }
    getProfile.send(JSON.stringify(payload));
})