'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('users',[
      {
        name:"Amit",
        ProjectId:"1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"Aman Dantarwall",
        ProjectId:"2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"rohan",
        ProjectId:"3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"anu",
        ProjectId:"4",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"Jonny Ray",
        ProjectId:"5",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"lilly",
        ProjectId:"6",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"ram",
        ProjectId:"7",
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('users',{},null);
  
  
  }
};
