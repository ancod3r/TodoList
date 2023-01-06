// Create Database Model - Table Name and Column Name
module.exports = (sequelize, DataTypes) => {
  const todoTable = sequelize.define('todolists', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    jobtodo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    toggle: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }

  })
  return todoTable
}
