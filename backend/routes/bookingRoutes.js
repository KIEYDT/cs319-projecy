const express = require("express");
const router = express.Router();

const { createBooking, getBooking, getBookingById } = require("../controllers/bookControllers");


router.post("/", createBooking);

router.get("/", getBooking);
router.get("/:id", getBookingById);


module.exports = router;