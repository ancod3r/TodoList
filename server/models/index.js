const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../db/db')
const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.sequelize.sync({ force: false }) //sync force if 'true' It will drop the table first and re-create it afterwards
  .then(() => {
    console.log('Syncing. . .')
  })
db.todoTable = require('./db-table')(sequelize, DataTypes)

module.exports = db
