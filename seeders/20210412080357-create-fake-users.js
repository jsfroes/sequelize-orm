"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          email: "john@emai.com",
          role: "admin",
          uuid: "7f0533dc-153a-4448-96c9-52e174261ed7",
          createdAt: "2021-04-12T07:39:58.494Z",
          updatedAt: "2021-04-12T07:39:58.494Z",
        },
        {
          name: "Jane Doe",
          email: "jane@emai.com",
          role: "admin",
          uuid: "7f0533dc-153a-4448-96c9-52e174261ed8",
          createdAt: "2021-04-12T07:39:58.494Z",
          updatedAt: "2021-04-12T07:39:58.494Z",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
