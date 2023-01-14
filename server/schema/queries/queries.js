// UserQueries file means READ(GettingDetails) Operations code to be written.
const { GraphQLList, GraphQLInt } = require('graphql')
const db = require('../../models')
const UserType = require('../typedefs/usertype')
const dbtodo = db.todoTable

module.exports.MSG_LIST = {
  type: new GraphQLList(UserType),
  resolve: async (parent, args) => {
    await (
      data = dbtodo.findAll()
    )
    return data
  }
}

module.exports.MSG_DETAILS = {
  type: new GraphQLList(UserType),
  args: {
    id: { type: GraphQLInt }
  },
  resolve (parent, args) {
    // console.log(args)
    const data = dbtodo.findAll({ where: { id: args.id } })
    return data
  }
}
