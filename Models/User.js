"use strict"

class User{
    constructor(_id, username,password,firstName,lastName,gender,address,mobileNumber,profilePicture,emailAdd){
        this.id = _id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.address = address;
        this.mobileNumber = mobileNumber;
        this.profilePicture = profilePicture;
        this.emailAdd = emailAdd;
    }
    getId(){
        return this.id;
    }
    getUsername(){
        return this.username;
    }
    getPassword(){
        return this.password;
    }
    getFirstName(){
        return this.firstName;
    }
    getLastName(){
        return this.lastName;
    }
    getGender(){
        return this.gender;
    }
    getAddress(){
        return this.address;
    }
    getMobileNumber(){
        return this.mobileNumber;
    }
    getProfilePic(){
        return this.profilePicture;
    }
    getEmailAdd(){
        return this.emailAdd;
    }

    setUsername(username){
        this.username = username;
    }
    setPassword(password){
        this.password = password;
    }
    setFirstName(firstName){
        this.firstName = firstName;
    }
    setLastName(lastName){
        this.lastName = lastName;
    }
    setGender(gender){
        this.gender = gender;
    }
    setAddress(address){
        this.address = address;
    }
    setProfilePic(profilePicture){
        this.profilePicture = profilePicture;
    }
    setEmail(emailAdd){
        this.emailAdd = emailAdd;
    }
    

}
module.exports = User;