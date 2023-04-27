module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define("projects", {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      }
    });
  
    return Project;
  };