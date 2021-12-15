"use strict"

var db = require('../db-connection');
const Favourites = require('../Models/Favourites');

class FavouritesDB{

    getAllFavourites(request, respond){
        var sql = "SELECT * FROM restaurant_review.favourites";
        db.query(sql, function(error, result){
            if(error){
                throw error;
            }
            else{
				respond.json(result);
            }
        });
    }
    getFavouritesId(request, respond){
        var favouritesID = request.params.id;
        var sql = "SELECT * FROM restaurant_review.favourites WHERE _id= ?";
        db.query(sql, favouritesID ,function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }


    addFavourites(request, respond){
        var favouritesObject = new Favourites(null, request.body.restaurant__id, request.body.user__id );
        var sql = "INSERT INTO restaurant_review.favourites (restaurant__id,user__id) VALUES(?,?)";
        var values = [favouritesObject.getRestaurantId(), favouritesObject.getUserId()];
        db.query(sql, values, function (error, result) {
            if(error){
                throw error;
            }
            else{
				respond.json(result);

            }
          });
    }
    
    
    deleteFavourites(request, respond){
        var favouritesID = request.params.id;
        var sql = "DELETE FROM restaurant_review.favourites WHERE _id = ?";
        db.query(sql, favouritesID, function (error, result) {
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
          });
    }
    
}
function prepareMessage(msg){
    var obj = {"message": msg};
    return obj;
}
module.exports = FavouritesDB;

