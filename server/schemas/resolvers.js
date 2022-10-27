const { User, Budget, Todos } = require('../models')

const resolvers = {
  Query: {
    // add auth check here? 
      // get the signed in user
      currentUser: async (parent, { username }) => {
        return User.findOne({ username })
          .select('-__v -password')
          .populate('budget')
          .populate('todos')
      },
      // get users todos
  
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    }
  }
};
  
  module.exports = resolvers;
  