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

// Hardcoded MongoDB URI (replacing process.env.MONGO_URI)
const mongoURI = "mongodb+srv://ausiziba:Lobengula1@cluster0.u9d5c.mongodb.net/BusinessAdmin?retryWrites=true&w=majority";

// MongoDB connection
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
