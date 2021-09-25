'use strict';
module.exports = {
  up: async (queryInterface: { createTable: (arg0: string, arg1: { id: { allowNull: boolean; autoIncrement: boolean; primaryKey: boolean; type: any; }; label: { type: any; }; amount: { type: any; }; createdAt: { allowNull: boolean; type: any; }; updatedAt: { allowNull: boolean; type: any; }; }) => any; }, Sequelize: { INTEGER: any; STRING: any; DATE: any; }) => {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      label: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.INTEGER
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
  down: async (queryInterface: { dropTable: (arg0: string) => any; }, Sequelize: any) => {
    await queryInterface.dropTable('Transactions');
  }
};