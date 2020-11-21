module.exports = {
    up: function(queryInterface, Sequelize) {
      // logic for transforming into the new state
      return queryInterface.addColumn(
          'users',
          'img1',
          Sequelize.STRING
      )
    },
   
    down: function(queryInterface, Sequelize) {
      // logic for reverting the changes
    }
  }