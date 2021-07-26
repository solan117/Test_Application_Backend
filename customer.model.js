const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    _id: Number,
    Address: String,
    City: String,
    Country: String,
    District: String,
    FirstName: String,
    LastName: String,
    Phone: Number,
    Rentals: [{
        FilmTitle: String,
        filmId: Number,
        Payments: [{
            Amount: Number,
            PaymentDate: String,
            PaymentId: Number,
        }, ],
        RentalDate: String,
        rentalId: Number,
        ReturnDate: String,
        staffId: Number,
    }, ],
}, { timestamps: true });

module.exports = mongoose.model("Customer", customerSchema, "customer");