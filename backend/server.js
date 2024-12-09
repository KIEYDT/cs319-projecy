const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");


dotenv.config();


connectDB();


const app = express();


app.use(cors());
app.use(express.json());


app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));
app.use("/api/services", require("./routes/serviceRoutes"));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));