const { Category } = require("../models");

// OG Pokemon types = Normal, Fire, Water, Electric, Grass, Ice, Fighting, Poison, Ground, Flying, Psychic, Bug, Rock, Ghost, Dragon, Dark and Steel

const categoryData = [
  {
    category_title: "Normal",
  },
  {
    category_title: "Fire",
  },
  {
    category_title: "Water",
  },
  {
    category_title: "Electric",
  },
  {
    category_title: "Grass",
  },
  {
    category_title: "Ice",
  },
  {
    category_title: "Fighting",
  },
  {
    category_title: "Poison",
  },
  {
    category_title: "Ground",
  },
  {
    category_title: "Flying",
  },
  {
    category_title: "Psychic",
  },
  {
    category_title: "Bug",
  },
  {
    category_title: "Rock",
  },
  {
    category_title: "Ghost",
  },
  {
    category_title: "Dragon",
  },
  {
    category_title: "Dark",
  },
  {
    category_title: "Steel",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
