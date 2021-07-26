const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const moviesSchema = new mongoose.Schema({
    _id: Number,
    Category: String,
    Length: String,
    Country: String,
    Description: String,
    Rating: String,
    RentalDuration: String,
    ReplacementCost: Number,
    Title: String,
    Actors: [{
        FirstName: String,
        LastName: Number,
        actorId: Number,
    }, ],
});

module.exports = mongoose.model("Movies", moviesSchema, "movies");