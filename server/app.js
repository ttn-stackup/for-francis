var express = require('express');
var app = express();

app.listen(3000, function () {
    console.log('Express server listening on %d', 3000);
});

// Expose app
exports = module.exports = app;

//require("./auth")(app);
//require("./routes")(app);

console.log("Hello World");
