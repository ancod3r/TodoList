// Status Type to show Some status, Message
const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql

const StatusType = new GraphQLObjectType({
  name: 'status',
  fields: () => ({
    toggle: { type: GraphQLInt },
    message: { type: GraphQLString },
    error: { type: GraphQLString }
  })
})

module.exports = StatusType
