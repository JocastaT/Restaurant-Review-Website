"use strict"

class Favourites{
    constructor(id, restaurant__id, user__id){
        this.id = id;
        this.restaurantId = restaurant__id;
        this.userId = user__id;
    }
    getId(){
        return this.id;
    }
    getRestaurantId(){
        return this.restaurantId;
    }
    getUserId(){
        return this.userId;
    }

    setRestaurantId(restaurant__id){
        this.restaurantId = restaurant__id;
    }
    setRestaurant(user__id){
        this.userId = user__id;
    }
}
module.exports = Favourites;