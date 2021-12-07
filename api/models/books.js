'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    // define association here
      Books.belongsTo(models.Publishers, {
        foreignKey: 'publisher_id'
      })
      Books.belongsTo(models.Authors, {
        foreignKey: 'author_id'
      })
    }
  };
  Books.init({
    title: DataTypes.STRING,
    edition: DataTypes.STRING,
    genre: DataTypes.STRING,
    first_publication: DataTypes.DATEONLY,
    language: DataTypes.STRING,
    price: DataTypes.STRING,
    reviw: DataTypes.TEXT,
    quantity: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Books',
  });
  return Books;
};