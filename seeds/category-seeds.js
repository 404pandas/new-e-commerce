const { Category } = require("../models");

// OG Pokemon types = Normal, Fire, Water, Electric, Grass, Ice, Fighting, Poison, Ground, Flying, Psychic, Bug, Rock, Ghost, Dragon, Dark and Steel

const categoryData = [
  {
    category_name: "Normal 1",
  },
  {
    category_name: "Fire 2",
  },
  {
    category_name: "Water 3",
  },
  {
    category_name: "Electric 4",
  },
  {
    category_name: "Grass 5",
  },
  {
    category_name: "Ice 6",
  },
  {
    category_name: "Fighting 7",
  },
  {
    category_name: "Poison 8",
  },
  {
    category_name: "Ground 9",
  },
  {
    category_name: "Flying 10",
  },
  {
    category_name: "Psychic 11",
  },
  {
    category_name: "Bug 12",
  },
  {
    category_name: "Rock 13",
  },
  {
    category_name: "Ghost 14",
  },
  {
    category_name: "Dragon 15",
  },
  {
    category_name: "Dark 16",
  },
  {
    category_name: "Steel 17",
  },
  {
    category_name: "Fairy 18",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
