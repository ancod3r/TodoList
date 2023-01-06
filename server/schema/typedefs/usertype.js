// Here is Typedef - Type Defined
const graphql = require('graphql')
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql

const UserType = new GraphQLObjectType({
  name: 'user',
  fields: () => ({
    id: { type: GraphQLInt },
    jobtodo: { type: GraphQLString },
    toggle: { type: GraphQLInt }
  })
})

module.exports = UserType
