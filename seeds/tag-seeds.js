const { Tag } = require("../models");

const tagOptions = [
  {
    tag_name: "S-Tier",
  },
  {
    tag_name: "A-Tier",
  },
  {
    tag_name: "B-Tier",
  },
  {
    tag_name: "C-Tier",
  },
  {
    tag_name: "D-Tier",
  },
  {
    tag_name: "F-Tier",
  },
  {
    tag_name: "Mary's Favorites",
  },
  {
    tag_name: "Jacob's Favorites",
  },
  {
    tag_name: "Yen's Favorites",
  },
];

const seedTags = () => Tag.bulkCreate(tagOptions);

module.exports = seedTags;
