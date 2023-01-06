// Mutation file means here CREATE, UPDATE, DELETE Operations code to be written.
const { GraphQLInt, GraphQLString } = require('graphql')
const db = require('../../models')
const dbtodo = db.todoTable

const UserType = require('../typedefs/usertype')
const StatusType = require('../typedefs/statustype')

module.exports.MSG_ADD = {
  type: UserType,
  args: {
    jobtodo: { type: GraphQLString }
  },
  resolve: async (parent, args) => {
    const data = dbtodo
    await data.create({
      jobtodo: args.jobtodo
    })
    return args
  }
}

module.exports.MSG_UPDATE = {
  type: StatusType,
  args: {
    id: { type: GraphQLInt },
    jobtodo: { type: GraphQLString }
  },
  resolve: async (parent, args) => {
    // console.log(args)
    const data = dbtodo
    await data.update({
      jobtodo: args.jobtodo
    }, {
      where: {
        id: args.id
      }
    })
    return { toggle: true, message: `ID:${args.id}, JobToDo:${args.jobtodo}, Updated Successfully`, error: '' }
  }
}

module.exports.MSG_DELETE = {
  type: StatusType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: async (parent, args) => {
    // console.log(args)
    const data = dbtodo
    await data.destroy({
      where: {
        id: args.id
      }
    })
    return { toggle: true, message: `ID:${args.id}, Deleted Successfully`, error: '' }
  }
}

module.exports.MSG_TOGGLE = {
  type: UserType,
  args: {
    id: { type: GraphQLInt },
    toggle: { type: GraphQLInt }
  },
  resolve: async (parent, args) => {
    const data = dbtodo
    await data.update({ toggle: args.toggle }, { where: { id: args.id } })
    // console.log(args);
    return args
  }
}
