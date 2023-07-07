// https://graphql.org/graphql-js/
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const dotenv = require('dotenv')
const schema = require('./schema/index')
const app = express()
require('./models')
// const PORT = 4000
app.use(express.json({limit: "4096mb", extended: true}))  //{limit: "10mb", extended: true} Added to fix ERROR:request entity too large
app.use(express.urlencoded({limit: "4096mb", extended: true, parameterLimit: 4294967295}))

dotenv.config({ path: '../config.env' })
const PORT = process.env.PROXY_PORT || 5000

app.use(
  '/graphql', graphqlHTTP({
    schema,
    graphiql: true
  })
)

app.listen(PORT, () => {
  console.log(`SUCCESS: Running GraphQL server at http://localhost:${PORT}`)
})
