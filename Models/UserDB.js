"use strict";
var db = require('../db-connection');
const User = require('../Models/User');
var jwt = require("jsonwebtoken");
var secret = "somesecretkey";

class userDB {
    getAllUsers(request, respond) {
        var sql = "SELECT * FROM restaurant_review.user";
        db.query(sql, function(error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }
    getUserId(request, respond) {
        var userID = request.params.id;
        var sql = "SELECT * FROM restaurant_review.user WHERE _id= ?";
        db.query(sql, userID, function(error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }
    addUser(request, respond) {
        var userObject = new User(null, request.body.username, request.body.password, request.body.firstName, request.body.lastName,
            request.body.gender, request.body.address, request.body.mobileNumber, request.body.profilePicture, request.body.emailAdd);
        var sql = "INSERT INTO restaurant_review.user (username, password, firstName, lastName, gender, address, mobileNumber, profilePicture, emailAdd) VALUES (?,?,?,?,?,?,?,?,?)";
        var values = [userObject.getUsername(), userObject.getPassword(), userObject.getFirstName(), userObject.getLastName(),
            userObject.getGender(), userObject.getAddress(), userObject.getMobileNumber(), userObject.getProfilePic(), userObject.getEmailAdd()
        ];
        db.query(sql, values, function(error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);

            }
        });
    }
    updateFirstName(request, respond) {
        var userObject = new User(request.params.id, request.body.username, request.body.password, request.body.firstName, request.body.lastName,
            request.body.gender, request.body.address, request.body.mobileNumber, request.body.profilePicture, request.body.emailAdd);
        var sql = "UPDATE restaurant_review.user SET firstName=? WHERE _id =?";
        var values = [userObject.getFirstName(), userObject.getId()];
        db.query(sql, values, function(error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }
    updateLastName(request, respond) {
        var userObject = new User(request.params.id, request.body.username, request.body.password, request.body.firstName, request.body.lastName,
            request.body.gender, request.body.address, request.body.mobileNumber, request.body.profilePicture, request.body.emailAdd);
        var sql = "UPDATE restaurant_review.user SET lastName=? WHERE _id =?";
        var values = [userObject.getLastName(), userObject.getId()];
        db.query(sql, values, function(error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    updateUsername(request, respond) {
        var userObject = new User(request.params.id, request.body.username, request.body.password, request.body.firstName, request.body.lastName,
            request.body.gender, request.body.address, request.body.mobileNumber, request.body.profilePicture, request.body.emailAdd);
        var sql = "UPDATE restaurant_review.user SET username = ? WHERE _id = ?";
        var values = [userObject.getUsername(), userObject.getId()];
        db.query(sql, values, function(error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    changePassword(request, respond) {
        var userObject = new User(request.params.id, request.body.username, request.body.password, request.body.firstName, request.body.lastName,
            request.body.gender, request.body.address, request.body.mobileNumber, request.body.profilePicture, request.body.emailAdd);
        var sql = "UPDATE restaurant_review.user SET password = ? WHERE _id = ?";
        var values = [userObject.getPassword(), userObject.getId()];
        db.query(sql, values, function(error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    updateGender(request, respond) {
        var userObject = new User(request.params.id, request.body.username, request.body.password, request.body.firstName, request.body.lastName,
            request.body.gender, request.body.address, request.body.mobileNumber, request.body.profilePicture, request.body.emailAdd);
        var sql = "UPDATE restaurant_review.user SET gender = ? WHERE _id = ?";
        var values = [userObject.getGender(), userObject.getId()];
        db.query(sql, values, function(error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    updateAddress(request, respond) {
        var userObject = new User(request.params.id, request.body.username, request.body.password, request.body.firstName, request.body.lastName,
            request.body.gender, request.body.address, request.body.mobileNumber, request.body.profilePicture, request.body.emailAdd);
        var sql = "UPDATE restaurant_review.user SET address = ? WHERE _id = ?";
        var values = [userObject.getAddress(), userObject.getId()];
        db.query(sql, values, function(error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    updateMobileNo(request, respond) {
        var userObject = new User(request.params.id, request.body.username, request.body.password, request.body.firstName, request.body.lastName,
            request.body.gender, request.body.address, request.body.mobileNumber, request.body.profilePicture, request.body.emailAdd);
        var sql = "UPDATE restaurant_review.user SET mobileNumber = ? WHERE _id = ?";
        var values = [userObject.getMobileNumber(), userObject.getId()];
        db.query(sql, values, function(error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    updateProfilePic(request, respond) {
        var userObject = new User(request.params.id, request.body.username, request.body.password, request.body.firstName, request.body.lastName,
            request.body.gender, request.body.address, request.body.mobileNumber, request.body.profilePicture, request.body.emailAdd);
        var sql = "UPDATE restaurant_review.user SET profilePicture = ? WHERE _id = ?";
        var values = [userObject.getProfilePic(), userObject.getId()];
        db.query(sql, values, function(error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    updateEmail(request, respond) {
        var userObject = new User(request.params.id, request.body.username, request.body.password, request.body.firstName, request.body.lastName,
            request.body.gender, request.body.address, request.body.mobileNumber, request.body.profilePicture, request.body.emailAdd);
        var sql = "UPDATE restaurant_review.user SET emailAdd = ? WHERE _id = ?";
        var values = [userObject.getEmailAdd(), userObject.getId()];
        db.query(sql, values, function(error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    getLoginCredentials(request, respond) {
        var username = request.body.username;
        var password = request.body.password;

        var sql = "SELECT password FROM restaurant_review.user WHERE username = ?";

        db.query(sql, [username], function(error, result) {
            if (error) {
                throw error;
            } else {
                if (result.length > 0) {
                    if (password == result[0].password) {
                        var token = jwt.sign(username, secret);
                        respond.json({ result: token });
                    } else {
                        respond.json({ result: false });
                    }
                }
            }
        });
    }


    deleteUser(request, respond) {
        var token = request.body.token;
        var sql = "DELETE FROM restaurant_review.user WHERE username = ?";
        try {
            var decoded = jwt.verify(token, secret);
            db.query(sql, [decoded], function(error, result) {
                if (error) {
                    respond.json(error);
                } else {
                    respond.json(result);
                }
            })
        } catch (error) {
            respond.json({ result: false });
        }
    }

    updateMember(request, respond) {
        var token = request.body.token;
        var firstName = request.body.firstName;
        var lastName = request.body.lastName;
        var address = request.body.address;
        var mobileNumber = request.body.mobileNumber;
        var profilePicture = request.body.profilePicture;
        var emailAdd = request.body.emailAdd;
        var sql = "UPDATE restaurant_review.user SET firstName = ?,lastName=?, address = ?, mobileNumber = ?, profilePicture = ?, emailAdd = ? WHERE username = ?";

        try {
            var decoded = jwt.verify(token, secret);
            db.query(sql, [firstName, lastName, address, mobileNumber, profilePicture, emailAdd, decoded], function(error, result) {
                if (error) {
                    respond.json(error);
                } else {
                    respond.json(result);
                }
            })
        } catch (error) {
            respond.json({ result: false });
        }
    }

    getDetails(request, respond) {
        var token = request.body.token;
        var sql = "SELECT distinct firstName, lastName, address, mobileNumber, profilePicture, emailAdd FROM restaurant_review.user where username = ?";
        try {
            var decoded = jwt.verify(token, secret);
            db.query(sql, [decoded], function(error, result) {
                if (error) {
                    respond.json(error);
                } else {
                    respond.json(result);
                }
            })
        } catch (error) {
            respond.json({ result: false });
        }
    }
}

function prepareMessage(msg) {
    var obj = { "message": msg };
    return obj;
}

module.exports = userDB;