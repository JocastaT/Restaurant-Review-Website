"use strict"


const userdb = require('../Models/UserDB');
var userDBObject = new userdb();

function routeUser(app) {
    app.route('/user')
        .post(userDBObject.addUser)
        .get(userDBObject.getAllUsers)
    app.route('/login')
        .post(userDBObject.getLoginCredentials);
    app.route('/accountinfo')
        .put(userDBObject.updateMember)
        .post(userDBObject.getDetails);
    app.route('/delete')
        .delete(userDBObject.deleteUser)

}
module.exports = { routeUser };