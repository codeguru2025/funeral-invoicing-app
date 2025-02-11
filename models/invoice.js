// backend/models/invoice.js
const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  customerName: String,
  funeralPackage: String,
  items: [{
    name: String,
    quantity: Number,
    price: Number,
    total: Number
  }],
  totalAmount: Number,
  dateIssued: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Invoice", invoiceSchema);
