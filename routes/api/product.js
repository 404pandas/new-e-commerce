const router = require("express").Router();
const { Product, Category } = require("../../models");

// /api/products

// Get all products
router.get("/", (req, res) => {
  Product.findAll({
    include: [Category],
  })
    .then((products) => res.json(products))
    .catch((err) => res.status(500).json(err));
});

// Get single product
router.get("/:id", (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id,
    },
    include: [Category],
  })
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json(err));
});

// Create product
router.post("/", (req, res) => {
  Product.create(req.body)
    .then((product) => res.status(200).json(product))
    .catch((err) => res.status(400).json(err));
});

// Update a product
router.put("/:id", (req, res) => {
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => res.status(200).json(product))
    .catch((err) => res.status(400).json(err));
});

// Delete a product
router.delete("/:id", (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((products) => {
      console.log(products);
      res.status(200).json(products);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
