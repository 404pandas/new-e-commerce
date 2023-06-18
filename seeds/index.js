const seedCategories = require("./category-seeds");

const sequelize = require("../config/connection");

const seed = async () => {
  await sequelize.sync({ force: true });
  console.log("\n| ----- DATABASE SYNCED ----- |\n");
  await seedCategories();
  process.exit(0);
};

seed();
