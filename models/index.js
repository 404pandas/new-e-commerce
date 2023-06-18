// models
const Category = require("./Category");
const Product = require("./Product");
const ProductTag = require("./ProductTag");
const Tag = require("./Tag");

// products to category
Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// category to products
Category.hasMany(Product, {
  foreignKey: "category_id",
});

// product to tags
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id",
});

// tag to product
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
});

module.exports = { Product, Category, Tag, ProductTag };
