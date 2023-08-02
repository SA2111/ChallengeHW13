const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
// define columns
// column defenition for catagory name
      category_name: {
        type: DataTypes.STRING, 
      },
// column defenition for id 
       id: {
        primaryKey: true, 
        type: DataTypes.INTEGER,
        autoIncrement: true,  
        allowNull: false, 
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
