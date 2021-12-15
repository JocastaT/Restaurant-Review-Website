"use strict"

const addressdb = require('../Models/AddressDB');

var addressDBObject = new addressdb();

function routeAddress(app){
    app.route('/address')
        .get(addressDBObject.getAllAddress);
    app.route('/address/:id')
        .get(addressDBObject.getAddressId)
}
module.exports = {routeAddress};


