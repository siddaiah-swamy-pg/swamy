const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const tenantRoutes = require("./routes/tenants");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // Serve static files

// ✅ MongoDB Connection
const uri = "mongodb+srv://allmailwaste:Sidhik786@cluster0.uyx5zii.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));


// ✅ Register Routes
app.use("/api/tenants", tenantRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
