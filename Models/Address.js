"use strict"

class Address{
    constructor(__id, addressName, street, postalCode, googleMap){
        this.id = __id;
        this.addressName = addressName;
        this.street = street;
        this.postalCode = postalCode;
        this.googleMap = googleMap;
    }
    getId(){
        return this.id;
    }
    getAddressName(){
        return this.addressName;
    }
    getStreet(){
        return this.street;
    }
    getPostalCode(){
        return this.postalCode;
    }
    getGoogleMap(){
        return this.googleMap;
    }
}
module.exports = Address;