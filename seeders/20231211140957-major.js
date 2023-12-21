'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Majors', [
      {
        id: 1,
        major_name: 'Mathematics',
        accreditation: 'A',
        institution: 'Jenderal Soedirman University',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        major_name: 'Statistics',
        accreditation: 'B',
        institution: 'Jenderal Soedirman University',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
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
