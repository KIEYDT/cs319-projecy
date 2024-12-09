const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const serviceSchema = new Schema({
    title: String,
    description: String,
    cate: {
        type: String,
        enum: [
            "tour",
            "accommodation",
        ],
        default: "tour",
    },
    price: Number,
    location: String,
    available: Boolean,
}, {
    timestamps: true,
});


const Service = mongoose.model("Service", serviceSchema);
module.exports = Service;