const { User, Todos, Budget } = require('../models')

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
      todos: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Todos.find(params).sort({ createdAt: -1 });
      },
      // get a single todo
      singleTodo: async (parent, { _id }) => {
        return Todos.findOne({ _id });
      }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    addTodos: async (parent, args) => {
      const todo = await Todos.create(args);
      return todo;
    },
    
  }
};
  
  module.exports = resolvers;
  