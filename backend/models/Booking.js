const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = require("./User");
const Service = require("./Service");


const bookingSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    serviceId: {
        type: Schema.Types.ObjectId,
        ref: "Service",
    },
    bookingDate: {
        type: Date,
        required: true,
    },
    total: {
        type: Number,
        default: 1,
    },
    info: {
        type: String,
        required: false,
        default: "",
    },
    status: {
        type: String,
        enum: [
            "pending",
            "confirm",
            "cancel",
        ],
        default: "pending",
    },
    payment: {
        type: String,
        enum: [
            "pending",
            "paid",
        ],
        default: "pending",
    },
}, {
    timestamps: true,
});


const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;