const mongoose = require("mongoose");
const DB = "productmngr"

mongoose.connect("mongodb://localhost/" + DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false //For future error message
})
    .then(() => console.log("Connection established with" + DB))
    .catch(err => console.log("Error connecting to database", err))