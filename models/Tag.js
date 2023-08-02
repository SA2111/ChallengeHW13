const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
        // tag column
        tag_name: {
          type: DataTypes.STRING, 
        },
        // id column
        id: {
          type: DataTypes.INTEGER, 
          allowNull: false, 
          primaryKey: true, 
          autoIncrement: true, 
        },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
