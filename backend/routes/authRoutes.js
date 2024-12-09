const express = require("express");
const router = express.Router();

const { registerUser, loginUser, getProfile } = require("../controllers/authControllers");
const { protect } = require("../middleware/authMiddleware");


router.post("/sigup", registerUser);
router.post("/signin", loginUser);

router.get("/profile", protect, getProfile);


module.exports = router;