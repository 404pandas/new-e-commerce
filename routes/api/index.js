const router = require("express").Router();
const categoryRoutes = require("./category");
const productRoutes = require("./product");

// /api/categories
router.use("/categories", categoryRoutes);

// /api/products
router.use("/products", productRoutes);

module.exports = router;
