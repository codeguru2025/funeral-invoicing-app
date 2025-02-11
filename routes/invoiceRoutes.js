// backend/routes/invoiceRoutes.js
const express = require("express");
const Invoice = require("../models/invoice");

const router = express.Router();

// POST route to create an invoice
router.post("/", async (req, res) => {
    try {
        const { customerName, funeralPackage, items, totalAmount } = req.body;
        const invoice = new Invoice({ customerName, funeralPackage, items, totalAmount });
        await invoice.save();
        res.status(201).json(invoice);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
