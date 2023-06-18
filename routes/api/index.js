const router = require("express").Router();
const categoryRoutes = require("./category");
const productRoutes = require("./product");
const tagRoutes = require("./tag");

// /api/categories
router.use("/categories", categoryRoutes);

// /api/products
router.use("/products", productRoutes);

//  /api/tags
router.use("./tags", tagRoutes);

module.exports = router;
