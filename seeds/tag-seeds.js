const { Tag } = require("../models");

const tagOptions = [
  {
    tag_name: "S-Tier 1",
  },
  {
    tag_name: "A-Tier 2",
  },
  {
    tag_name: "B-Tier 3",
  },
  {
    tag_name: "C-Tier 4",
  },
  {
    tag_name: "D-Tier 5",
  },
  {
    tag_name: "F-Tier 6",
  },
  {
    tag_name: "Mary's Favorites 7",
  },
  {
    tag_name: "Jacob's Favorites 8",
  },
  {
    tag_name: "Yen's Favorites 9",
  },
];

const seedTags = () => Tag.bulkCreate(tagOptions);

module.exports = seedTags;
