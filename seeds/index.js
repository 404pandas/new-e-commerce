const seedCategories = require("./category-seeds");
const seedProducts = require("./product-seeds");
const seedTags = require("./tag-seeds");
const seedProductTags = require("./product-tag-seeds");

const sequelize = require("../config/connection");

const seed = async () => {
  await sequelize.sync({ force: true });
  console.log("\n| ----- DATABASE SYNCED ----- |\n");
  await seedCategories();
  console.log("\n| ---- CATEGORIES SEEDED ---- |\n");
  await seedProducts();
  console.log("\n| ----- PRODUCTS SYNCED ----- |\n");
  await seedTags();
  console.log("\n| ------- TAGS SYNCED ------- |\n");
  await seedProductTags();
  console.log("\n| --- PRODUCT TAGS SYNCED --- |\n");

  process.exit(0);
};

seed();
