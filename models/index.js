// models
const Category = require("./Category");
const Product = require("./Product");
// next step - build out tags

// products to category
Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// category to products
Category.hasMany(Product, {
  foreignKey: "category_id",
});

module.exports = { Product, Category };
