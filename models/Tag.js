// sequelize import
const { Model, DataTypes } = require("sequelize");
// sequelize ORM
const sequelize = require("../config/connection.js");

class Tag extends Models {}

Tag.init(
  {
    // id
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // title
    tag_title: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);
