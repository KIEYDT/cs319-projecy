const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  const { userId, serviceId, bookingDate, total, info } = req.body;

  try {
    const booking = await Booking.create({
      userId: userId,
      serviceId: serviceId,
      bookingDate: bookingDate,
      total: total,
      info: info
    });
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: "Bad request" });
  }
};

exports.getBooking = async (req, res) => {
  try {
    const book = await Booking.find();
    console.log(book);
    res.status(200).json({ message: "OK", book });
  } catch (error) {
    res.status(500).json({ message: "bad request qwe", error });
  }
};

exports.getBookingById = async (req, res) => {
  const userId = req.params.id;

  try {
    const book = await Booking.find({ userId: userId }).populate('serviceId');
    console.log(book)
    if (!book) {
      return res.status(404).json({ message: "not found" });
    }

    res.status(200).json({ message: "OK", book });
  } catch (error) {
    res.status(500).json({ message: "bad request asd", error });
  }
};

exports.updateBooking = async (req, res) => {
  const { bookingId, status } = req.body;

  try {
    const book = Booking.findById(bookingId);

    if (!book) {
      return res.status(404).json({ message: "booking not found" });
    }

    book.status = status;
  } catch (error) {
    res.status(500).json({ message: "bad request", error });
  }
};
