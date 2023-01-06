// Database Defination and Connection
const Sequelize = require('sequelize')
const sequelize = new Sequelize('tododb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: { timestamps: false },
  // logging: console.log
  logging: false
})

sequelize.authenticate()
  .then(() => {
    console.log('SUCCESS: Connected to Database')
  })
  .catch(e => {
    console.log('Error: ' + e)
  })

module.exports = sequelize
