"use strict"
var db = require('../db-connection');

class PreferencesDB{
    getAllPreferences(request, respond){
        var sql = "SELECT * FROM restaurant_review.preferences";
        db.query(sql, function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }

    getRestaurantsIdByCusine(request, respond){
        var cuisine = request.params.cuisine;
        var sql = "SELECT * FROM restaurant_review.preferences WHERE cuisine = ?";
        db.query(sql, cuisine ,function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }
    getRestaurantsIdByPrice(request, respond){
        var priceRange = request.params.priceRange;
        var sql = "SELECT * FROM restaurant_review.preferences WHERE priceRange=?";
        db.query(sql, priceRange ,function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }
    getRestaurantsIdByPrice(request, respond){
        var priceRange = request.params.priceRange;
        var sql = "SELECT * FROM restaurant_review.preferences WHERE priceRange=?";
        db.query(sql, priceRange ,function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }
    getRestaurantsIdByLocation(request, respond){
        var location = request.params.location;
        var sql = "SELECT * FROM restaurant_review.preferences WHERE location=?";
        db.query(sql, location ,function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }
    
}

module.exports = PreferencesDB;