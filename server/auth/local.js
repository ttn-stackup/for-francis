var LocalStrategy = require("passport-local").Strategy;


module.exports = function (passport) {
    passport.use(new LocalStrategy({
        usernameField: "email",
        passwordField: "password"
    }, authenticate));

};

function authenticate(username, password, done){
    var valid = true;


    // done(error, result);
    if(valid){
        return done(null, username);
    }

    return done(null, false)
}