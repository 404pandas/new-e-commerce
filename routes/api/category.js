const router = require("express").Router();
const { Category } = require("../../models");

// /api/categories

// Get all categories
router.get("/", (req, res) => {
  Category.findAll({
    // todo- add product when built out
  })
    .then((categories) => res.json(categories))
    .catch((err) => res.status(500).json(err));
});

// Get single category
router.get("/:id", (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    // todo- add product when built out
  })
    .then((category) => res.json(category))
    .catch((err) => res.status(400).json(err));
});

// Create category
router.post("/", (req, res) => {
  Category.create(req.body)
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(400).json(err));
});

// Update a category
router.put("/:id", (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(400).json(err));
});

// Delete a category
router.delete("/:id", (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;