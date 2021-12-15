"use strict"

class Restaurant{
    constructor(id, name, description, picture1, picture2, rating, operatinghrs, cuisine, contact, dish1, dish2, bookingURL, thumb, addressName,street,postalCode,googleMap,restLatitude,restLongtitude){
        this.id = id;
        this.name = name;
        this.description = description;
        this.picture1 = picture1;
        this.picture2 = picture2;
        this.rating = rating;
        this.operatinghrs = operatinghrs;
        this.cuisine = cuisine;
        this.contact = contact;
        this.dish1 = dish1;
        this.dish2 = dish2;
        this.bookingURL = bookingURL;
        this.thumb = thumb;
        this.addressName = addressName;
        this.street = street;
        this.postalCode = postalCode;
        this.googleMap = googleMap;
        this.restLatitude = restLatitude;
        this.restLongtitude = restLongtitude;


    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getDescription(){
        return this.description;
    }
    getPicture1(){
        return this.picture1;
    }
	getPicture2(){
        return this.picture2;
    }
	getRating(){
        return this.rating;
    }
    getOperatinghrs(){
        return this.operatinghrs;
    }
    getCuisine(){
        return this.cuisine;
    }
    getContact(){
        return this.contact;
    }
    getDish1(){
        return this.dish1;
    }
    getDish2(){
        return this.dish2;
    }
    getBookingURL(){
        return this.bookingURL;
    }
    getThumb(){
        return this.thumb;
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
    getLatitude(){
        return this.restLatitude;
    }
    getLongtitude(){
        return this.restLongtitude;
    }
}
module.exports = Restaurant;