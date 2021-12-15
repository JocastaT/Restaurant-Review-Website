"use strict"
var db = require('../db-connection');
const sgMail = require('@sendgrid/mail')
class RestaurantDB{
    getAllRestaurants(request, respond){
        var sql = "SELECT * FROM restaurant_review.restaurant";
        db.query(sql, function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }
    
    searchRestaurant(request, respond){
        var searchTerm = request.body.search;
        var search = "%" + searchTerm + "%";
        var sql = "SELECT r.*, a.restaurantAddress, a.latitude, a.longitude, COUNT(distinct c._id) AS comments, ROUND(avg(distinct c.rating)) AS avgrating, COUNT(distinct f._id) AS favourites FROM restaurant_review.restaurants AS r JOIN restaurant_review.address AS a ON  r.addressId = a._id JOIN restaurant_review.comments AS c ON c.restaurantId = r._id JOIN restaurant_review.favourites AS f ON  f.restaurant_id = r._id WHERE r.name like ? GROUP BY r._id";
        db.query(sql, [search] , function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }

    searchAllRestaurantReview(request, respond){
        var searchTerm = request.body.search;
        var search = "%" + searchTerm + "%";
        var sql = "SELECT * FROM restaurant_review.restaurant WHERE name LIKE '%" + search + "%'";
        db.query(sql, [search] , function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }
    getAllRestaurantswAddress(request, respond){
        var sql = "SELECT restaurant.name, address.addressName, address.street, address.postalCode, address.googleMap FROM restaurant INNER JOIN address ON address._id = restaurant.address__id;";
        db.query(sql, function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }
    getRestaurantsId(request, respond){
        var restaurantID = request.params.id;
        var sql = "SELECT * FROM restaurant_review.restaurant WHERE _id= ?";
        db.query(sql, restaurantID ,function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }
    sendEmail(request, respond) {
        var email = request.body.email;
        var feedback = request.body.feedback;
        sgMail.setApiKey("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")
        const msg = {
            to: email, // Change to your recipient
            from: 'jocastatan0171@gmail.com', // Change to your verified sender
            subject: 'URBANDINE FEEDBACK',
            text: feedback,
            html: '<strong>'+ feedback + '</strong>',
        }
        sgMail
            .send(msg)
            .then(() => {
                console.log('Email sent')
                respond.json({ result: "success" });
            })
            .catch((error) => {
                console.error(error)
                respond.json({ result: "fail" });
            })
    }
    
  
}

module.exports = RestaurantDB;


