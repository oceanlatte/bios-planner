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
      },
      // get all budgets
      budgets: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Budget.find(params).sort({ createdAt: -1 });
      }
  },

  Mutation: {
    // CREATE MUTATIONS
    addUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    addTodos: async (parent, args) => {
      const todo = await Todos.create(args);
      return todo;
    },
    // () CANNOT ADD MULTIPLE BUDGETS
    addBudgetTotal: async (parent, args) => {
      const total = await Budget.create(args);
      return total;
    },
    addExpense: async (parent, { budgetId, expenseName, expenseAmount }) => {
      const expense = await Budget.findOneAndUpdate(
        { _id: budgetId },
        { $push: { expenses: { expenseName, expenseAmount } } },
        { new: true, runValidators: true }
      );
      return expense;
    },
    // ?? Does income need to add the budget total here??
    addIncome: async (parent, { budgetId, incomeAmount }) => {
      const incomeCreate = await Budget.findOneAndUpdate(
        { _id: budgetId },
        { $push: { income: { incomeAmount } } },
        { new: true, runValidators: true }
      );
      return incomeCreate;
    },
    // UPDATE MUTATIONS
    updateUser: async (parent, { userId, username, email }) => {
      console.log(username, email)
      const user = await User.findByIdAndUpdate(userId,
        { $set: { username: username, email: email } },
        { new: true, runValidators: true }
      );
      return user;
    },
    updateTodo: async (parent, { todoId, ...args }) => {
      const updateTodo = await Todos.findByIdAndUpdate(todoId,
        { $set: { ...args } },
        { new: true, runValidators: true }
      );
      return updateTodo;
    },
    updateBudget: async (parent, { budgetId, ...args }) => {
      const updateBudget = await Budget.findByIdAndUpdate(budgetId,
        { $set: { ... args } },
        { new: true, runValidators: true }
      );
      return updateBudget;
    },
    
  }
};
  
  module.exports = resolvers;