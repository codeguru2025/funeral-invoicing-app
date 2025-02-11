require('dotenv').config();  // Add this line at the top of your server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const invoiceRoutes = require("./routes/invoiceRoutes");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection using environment variable
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("MongoDB connected");
})
.catch((err) => {
    console.log("MongoDB connection error: ", err);
});

// Routes
app.use('/api/invoices', invoiceRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
