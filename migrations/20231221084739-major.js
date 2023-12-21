'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Majors', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      majorName: {
        type: Sequelize.STRING,
        field: 'major_name'
      },
      accreditation: {
        type: Sequelize.STRING
      },
      institution: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Majors');
  }
};
