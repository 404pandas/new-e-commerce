const router = require("express").Router();
const categoryRoutes = require("./category");

// /api/categories
router.use("/categories", categoryRoutes);

module.exports = router;
