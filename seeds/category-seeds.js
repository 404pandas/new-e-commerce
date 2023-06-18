const { Category } = require("../models");

// OG Pokemon types = Normal, Fire, Water, Electric, Grass, Ice, Fighting, Poison, Ground, Flying, Psychic, Bug, Rock, Ghost, Dragon, Dark and Steel

const categoryData = [
  {
    category_title: "Normal 1",
  },
  {
    category_title: "Fire 2",
  },
  {
    category_title: "Water 3",
  },
  {
    category_title: "Electric 4",
  },
  {
    category_title: "Grass 5",
  },
  {
    category_title: "Ice 6",
  },
  {
    category_title: "Fighting 7",
  },
  {
    category_title: "Poison 8",
  },
  {
    category_title: "Ground 9",
  },
  {
    category_title: "Flying 10",
  },
  {
    category_title: "Psychic 11",
  },
  {
    category_title: "Bug 12",
  },
  {
    category_title: "Rock 13",
  },
  {
    category_title: "Ghost 14",
  },
  {
    category_title: "Dragon 15",
  },
  {
    category_title: "Dark 16",
  },
  {
    category_title: "Steel 17",
  },
  {
    category_title: "Fairy 18",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
