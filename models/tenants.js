const mongoose = require("mongoose");

const tenantSchema = new mongoose.Schema({
  name: String,
  roomNo: String,
  guardianName: String,
  guardianContact: String,
  dob: String,
  joiningDate: String,
  age: String,
  panNumber: String,
  permanentAddress: String,
  officeAddress: String,
  personalContact: String,
  emergencyContact: String,
  monthlyRent: String,
  advanceAmount: String,
  foodPreference: String,
  aadharFront: String,  // file path
  aadharBack: String,   // file path
  selfie: String,       // file path
  panCardUpload: String,// file path
}, { timestamps: true });

module.exports = mongoose.model("Tenant", tenantSchema);
