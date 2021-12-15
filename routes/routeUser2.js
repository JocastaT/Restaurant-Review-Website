"use strict"


const userdb = require('../Models/UserDB');
var userDBObject = new userdb();

function routeUser(app) {
    app.route('/user')
        .post(userDBObject.addUser)
        .get(userDBObject.getAllUsers)
    app.route('/login')
        .post(userDBObject.getLoginCredentials);
    app.route('/user/:id')
        .get(userDBObject.getUserId)
    app.route('/firstname/:id')
        .put(userDBObject.updateFirstName)
    app.route('/lastname/:id')
        .put(userDBObject.updateLastName)
    app.route('/username/:id')
        .put(userDBObject.updateUsername)
    app.route('/gender/:id')
        .put(userDBObject.updateGender)
    app.route('/address/:id')
        .put(userDBObject.updateAddress)
    app.route('/mobileno/:id')
        .put(userDBObject.updateMobileNo)
    app.route('/password/:id')
        .put(userDBObject.changePassword)
    app.route('/profile/:id')
        .put(userDBObject.updateProfilePic)
    app.route('/email/:id')
        .put(userDBObject.updateEmail);
    app.route('/accountinfo')
        .put(userDBObject.updateMember)
        .post(userDBObject.getDetails);
    app.route('/deleteuser/:username')
        .delete(userDBObject.deleteUser)
    


}
module.exports = { routeUser };
