'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      edition: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      first_publication: {
        type: Sequelize.DATEONLY
      },
      language: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      reviw: {
        type: Sequelize.TEXT
      },
      quantity: {
        type: Sequelize.STRING
      },
      publisher_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Publishers', key: 'id'}
      },
      author_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Authors', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Books');
  }
};