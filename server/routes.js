var DoctorApi = require ("./api/doctor/doctor.api.js");

var PrescriptionApi = require ("./api/doctor/doctor.api.js");

var UserApi = require ("./api/doctor/doctor.api.js");

var RatingApi = require ("./api/doctor/doctor.api.js");

var passport = require("passport");

module.exports = function(app){

    app.post("/login", passport.authenticate("local", {
        successRedirect: "/status/201",
        failureRedirect: "/status/403"
    }));

    app.get("/api/doctors/create", DoctorApi.create);
    app.get("/api/doctors/update", DoctorApi.update);
    app.get("/api/doctors/remove", DoctorApi.remove);
    app.get("/api/doctors/list", DoctorApi.list);

    app.get("/api/prescriptions/list", PrescriptionApi.list);
    app.get("/api/prescriptions/list", PrescriptionApi.list);
    app.get("/api/prescriptions/list", PrescriptionApi.list);

    app.get("/api/users/list", UserApi.list);
    app.get("/api/users/list", UserApi.list);
    app.get("/api/users/list", UserApi.list);
    app.get("/api/users/list", UserApi.list);

    app.get("/api/ratings/list", RatingApi.list);
    app.get("/api/ratings/list", RatingApi.list);
    app.get("/api/ratings/list", RatingApi.list);
    app.get("/api/ratings/list", RatingApi.list);
};
