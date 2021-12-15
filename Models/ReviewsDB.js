"use strict"

var db = require('../db-connection');
const Review = require('../Models/Review');

class ReviewsDB{

    getAllReviews(request, respond){
        var sql = "SELECT * FROM restaurant_review.reviews";
        db.query(sql, function(error, result){
            if(error){
                throw error;
            }
            else{
				respond.json(result);
            }
        });
    }
    getAllReviewswUser(request, respond){
        var sql = "SELECT restaurant.name, reviews.review, reviews.rating, user.username FROM ((reviews INNER JOIN user ON user._id = reviews.user__id) INNER JOIN restaurant ON restaurant._id = reviews.restaurant__id);";
        db.query(sql, function(error, result){
            if(error){
                throw error;
            }
            else{
				respond.json(result);
            }
        });
    }
    getReviewsId(request, respond){
        var reviewsID = request.params.id;
        var sql = "SELECT * FROM restaurant_review.reviews WHERE _id= ?";
        db.query(sql, reviewsID ,function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }


    addReview(request, respond){
        var now = new Date();
        var reviewObject = new Review(null, request.body.restaurant__id, request.body.restaurant, request.body.username, request.body.review, 
             now.toString(),request.body.rating );
        var sql = "INSERT INTO restaurant_review.reviews (restaurant__id,restaurant,username,review, datePosted,rating) VALUES(?,?,?,?,?,?)";
        var values = [reviewObject.getRestaurantId(), reviewObject.getRestaurant(),  reviewObject.getUsername(),reviewObject.getReview(), 
            reviewObject.getDatePosted(), reviewObject.getRating()];
        db.query(sql, values, function (error, result) {
            if(error){
                throw error;
            }
            else{
				respond.json(result);

            }
          });
    }
    updateReview(request, respond){
        var now = new Date();
        var reviewObject = new Review(request.params.id, request.body.restaurant__id, request.body.restaurant,  request.body.username, 
            request.body.review, now.toString(), request.body.rating);
        var sql = "UPDATE restaurant_review.reviews SET review = ?, datePosted = ?, rating=? WHERE _id = ?";
        var values = [reviewObject.getReview(), reviewObject.getDatePosted(), reviewObject.getRating(), reviewObject.getId()];
        db.query(sql, values, function (error, result) {
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
          });
    }

    
    deleteReview(request, respond){
        var reviewID = request.params.id;
        var sql = "DELETE FROM restaurant_review.reviews WHERE _id = ?";
        db.query(sql, reviewID, function (error, result) {
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
module.exports = ReviewsDB;

