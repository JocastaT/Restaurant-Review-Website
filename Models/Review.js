"use strict"

class Review{
    constructor(id, restaurant__id, restaurant, username, review, datePosted, rating){
        this.id = id;
        this.restaurantId = restaurant__id;
        this.restaurant = restaurant;
        this.username = username;
        this.review = review;
        this.datePosted = datePosted;
        this.rating = rating;
    }
    getId(){
        return this.id;
    }
    getRestaurantId(){
        return this.restaurantId;
    }
    getRestaurant(){
        return this.restaurant;
    }
    getUsername(){
        return this.username;
    }
    getReview(){
        return this.review;
    }
    getDatePosted(){
        return this.datePosted;
    }
    getRating(){
        return this.rating;
    }
   

    setRestaurantId(restaurant__id){
        this.restaurantId = restaurant__id;
    }
    setRestaurant(restaurant){
        this.restaurant = restaurant;
    }
    setUsername(username){
        this.username = username;
    }
    setReview(review){
        this.review = review;
    }
    setDatePosted(datePosted){
        this.datePosted = datePosted;
    }
    setRating(rating){
        this.rating = rating;
    }
    
}
module.exports = Review;