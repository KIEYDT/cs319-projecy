const express = require("express");
const router = express.Router();

const { protect, adminOnly } = require('../middleware/authMiddleware');
const { createService, getService, getServiceById } = require("../controllers/serviceControllers");


router.post("/", createService);

router.get("/", getService);
router.get("/:id", getServiceById);


module.exports = router;