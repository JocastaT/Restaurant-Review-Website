"use strict"

const preferencesdb = require('../Models/PreferencesDB');

var preferencesDBObject = new preferencesdb();

function routePreferences(app){
    app.route('/preferences1')
        .get(preferencesDBObject.getAllPreferences);
    app.route('/preferences/:cuisine')
        .get(preferencesDBObject.getRestaurantsIdByCusine);
    
}
module.exports = {routePreferences};
