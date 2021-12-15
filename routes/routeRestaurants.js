"use strict"

const restaurantdb = require('../Models/RestaurantDB');

var restaurantDBObject = new restaurantdb();

function routeRestaurants(app) {
    app.route('/restaurants')
        .get(restaurantDBObject.getAllRestaurants);
    app.route('/search')
        .post(restaurantDBObject.searchAllRestaurantReview);
    app.route('/restadd')
        .get(restaurantDBObject.getAllRestaurantswAddress);
    app.route('/restaurants/:id')
        .get(restaurantDBObject.getRestaurantsId);
    app.route('/email')
        .post(restaurantDBObject.sendEmail);
}

module.exports = { routeRestaurants };


