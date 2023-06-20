const { Category } = require("../models");

// OG Pokemon types = Normal, Fire, Water, Electric, Grass, Ice, Fighting, Poison, Ground, Flying, Psychic, Bug, Rock, Ghost, Dragon, Dark and Steel

const categoryData = [
  {
    category_name: "Normal",
  },
  {
    category_name: "Fire",
  },
  {
    category_name: "Water",
  },
  {
    category_name: "Electric",
  },
  {
    category_name: "Grass",
  },
  {
    category_name: "Ice",
  },
  {
    category_name: "Fighting",
  },
  {
    category_name: "Poison",
  },
  {
    category_name: "Ground",
  },
  {
    category_name: "Flying",
  },
  {
    category_name: "Psychic",
  },
  {
    category_name: "Bug",
  },
  {
    category_name: "Rock",
  },
  {
    category_name: "Ghost",
  },
  {
    category_name: "Dragon",
  },
  {
    category_name: "Dark",
  },
  {
    category_name: "Steel",
  },
  {
    category_name: "Fairy",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
