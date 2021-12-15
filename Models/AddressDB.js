"use strict"
var db = require('../db-connection');

class AddressDB{
    getAllAddress(request, respond){
        var sql = "SELECT * FROM restaurant_review.address";
        db.query(sql, function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }
    getAddressId(request, respond){
        var addressID = request.params.id;
        var sql = "SELECT * FROM restaurant_review.address WHERE _id= ?";
        db.query(sql, addressID ,function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }
  
}

module.exports = AddressDB;