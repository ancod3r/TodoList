const graphql = require('graphql')
const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList, GraphQLBoolean } = graphql

const { MSG_LIST, MSG_DETAILS } = require('./queries/queries')
const { MSG_ADD, MSG_UPDATE, MSG_DELETE, MSG_TOGGLE } = require('./mutations/mutation')

const RootQuery = new GraphQLObjectType({
  name: 'query',
  fields: {
    msglist: MSG_LIST,
    msgDetail: MSG_DETAILS
  }
})

const Mutation = new GraphQLObjectType({
  name: 'mutation',
  fields: {
    msgCreate: MSG_ADD,
    msgUpdate: MSG_UPDATE,
    msgDelete: MSG_DELETE,
    msgToggle: MSG_TOGGLE
  }
})

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation })
