const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const tenantRoutes = require("./routes/tenants");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // Serve static files

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/pg-tenant-db")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Register Routes
app.use("/api/tenants", tenantRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
