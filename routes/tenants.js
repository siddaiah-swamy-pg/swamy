const express = require("express");
const router = express.Router();
const multer = require("multer");
const Tenant = require("../models/tenant");

// Set up multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// POST /api/tenants/create
router.post("/create", upload.fields([ 
  { name: "selfie", maxCount: 1 },
  { name: "aadharFront", maxCount: 1 },
  { name: "aadharBack", maxCount: 1 },
  { name: "panCard", maxCount: 1 }
]), async (req, res) => {
  try {
    // Ensure you're getting text data and files from the request
    const newTenant = new Tenant({
      name: req.body.name,
      email: req.body.email,
      roomNumber: req.body.roomNumber,
      phone: req.body.phone,
      selfie: req.files["selfie"] ? req.files["selfie"][0].path : null,
      aadharFront: req.files["aadharFront"] ? req.files["aadharFront"][0].path : null,
      aadharBack: req.files["aadharBack"] ? req.files["aadharBack"][0].path : null,
      panCard: req.files["panCard"] ? req.files["panCard"][0].path : null,
    });

    // Save tenant to the database
    await newTenant.save();
    res.status(201).json({ message: "Tenant saved successfully" }); // Success response
  } catch (err) {
    console.error("Error saving tenant:", err);
    res.status(500).json({ message: "Error saving tenant" }); // Error response
  }
});


// Export the router
module.exports = router;
