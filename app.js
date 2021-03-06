const express = require("express");
const app = express();
var request = require("request");
const mongoose = require("mongoose");
var cors = require("cors");

app.use(cors()); // Use this after the variable declaration
app.use(express.json());
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
let Customer = require("./customer.model");
let Movies = require("./movies.model");
let CircularJSON = require("circular-json");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = "mongodb://localhost:27017/dilwaree";
db.customer = require("./customer.model.js")(mongoose);
mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get("/", (req, res) => {
    res.json("Welcome to Dilwari application.");
});

app.get("/customerList", (req, res) =>
    Customer.find({},  ).then(function(customer) {
        res.send(customer);
    })
);

app.get("/customerList/:id", (req, res) =>
    Customer.findById(req.params.id, {}).then(function(customer) {
        res.send(customer);
    })
);

const moviesProjection = {
    Title: true,
    Category: true,
    Rating: true,
};

app.get("/movieList", (req, res) =>
    Movies.find({}, moviesProjection).then(function(movie) {
        res.send(movie);
    })
);

app.get("/movieList/:id", async (req, res) =>{
    
    var customers = await Customer.find({ "Rentals.filmId": req.params.id }, { "First Name": true, "Last Name": true })
    var movies = await Movies.findById(req.params.id, {});

    var final = {movies, 'customers': customers};
    res.send(final);
});

app.listen(5000, function() {
    console.log("listening on 5000");
});