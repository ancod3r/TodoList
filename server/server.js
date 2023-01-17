// https://graphql.org/graphql-js/
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const dotenv = require('dotenv')
const schema = require('./schema/index')
const app = express()
require('./models')
const PORT = 4000
app.use(express.json())
// dotenv.config({ path: './config.env' })
// const PORT = process.env.PORT || 4000

app.use(
  '/graphql', graphqlHTTP({
    schema,
    graphiql: true
  })
)

app.listen(PORT, () => {
  console.log(`SUCCESS: Running GraphQL server at http://localhost:${PORT}`)
})
