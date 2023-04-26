'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('funcionarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      departamento: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      salario: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      data_nascimento: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      cpf: {
        allowNull: false,
        type: Sequelize.STRING,
      }

    })

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('funcionarios')

  }
};
