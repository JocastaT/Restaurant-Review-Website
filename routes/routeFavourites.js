"use strict"


const favouritesdb = require('../Models/FavouritesDB');

var favouritesDBObject = new favouritesdb();

function routeFavourites(app){
    app.route('/favourites')
        .post(favouritesDBObject.addFavourites)
        .get(favouritesDBObject.getAllFavourites);
    app.route('/favourites/:id')
        .get(favouritesDBObject.getFavouritesId)
        .delete(favouritesDBObject.deleteFavourites)

}
module.exports = {routeFavourites};
