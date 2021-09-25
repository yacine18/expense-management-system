'use strict';
module.exports = {
  up: async (queryInterface: { createTable: (arg0: string, arg1: { id: { allowNull: boolean; autoIncrement: boolean; primaryKey: boolean; type: any; }; name: { type: any; }; email: { type: any; }; password: { type: any; }; createdAt: { allowNull: boolean; type: any; }; updatedAt: { allowNull: boolean; type: any; }; }) => any; }, Sequelize: { INTEGER: any; STRING: any; DATE: any; }) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Users');
  }
};