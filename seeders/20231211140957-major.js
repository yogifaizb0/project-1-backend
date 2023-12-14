'use strict';

const { UUIDV4 } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Majors', [
      {
        major_name: 'Mathematics',
        accreditation: 'A',
        institution: 'Jenderal Soedirman University',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        major_name: 'Statistics',
        accreditation: 'B',
        institution: 'Jenderal Soedirman University',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        major_name: 'Informatics Engineering',
        accreditation: 'A',
        institution: 'Jenderal Soedirman University',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Majors', null, {});
  }
};
