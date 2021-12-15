"use strict"

class Preferences{
    constructor(_id, location, cuisine, priceRange, Restaurant__id){
        this.id = _id;
        this.location = location;
        this.cuisine = cuisine;
        this.priceRange = priceRange;
        this.restaurantId = Restaurant__id;
    }
    getId(){
        return this.id;
    }
    getLocation(){
        return this.location;
    }
    getCuisine(){
        return this.cuisine;
    }
    getPriceRange(){
        return this.priceRange;
    }
    getRestaurantId(){
        return this.restaurantId;
    }
}
module.exports = Preferences;