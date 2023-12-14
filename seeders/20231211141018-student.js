'use strict';

const { DATE } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Students', [
      {
        name: 'Yogi Faiz',
        email: 'yogifaiz@gmail.com',
        birth_date: new Date('1999-10-23'),
        address: 'jalan kenanga',
        major_id: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Wiwit Melinasari',
        email: 'wiwit@gmail.com',
        birth_date: new Date('2002-01-07'),
        address: 'jalan gn. muria',
        major_id: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Vivi Anestasya',
        email: 'vivi@gmail.com',
        birth_date: new Date('2001-05-19'),
        address: 'jalan gn. sumbing',
        major_id: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Annisa Wulansari',
        email: 'annisa@gmail.com',
        birth_date: new Date('2001-03-04'),
        address: 'jalan kampus',
        major_id: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Saraful Anam',
        email: 'saraful@gmail.com',
        birth_date: new Date('2000-11-16'),
        address: 'jalan saphire',
        major_id: 9,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Students', null, {});
  }
};
