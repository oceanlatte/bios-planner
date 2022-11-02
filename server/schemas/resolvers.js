const { AuthenticationError } = require('apollo-server-express');
const { User, Todos, Budget } = require('../models')
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    // add auth check here? 
    // get the signed in user
    currentUser: async (parent, { username }, context) => {
      if (context.user) {
        const userData = await User.findOne({ username })
          .select('-__v -password')
          .populate('budget')
          .populate('todos');

        return userData;
      }
      throw new AuthenticationError('Not logged in');
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
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addTodos: async (parent, args, context) => {
      if (context.user) {
        const todo = await Todos.create(args);
        console.log(todo);
        return todo;
      }
      throw new AuthenticationError('you need to be loggged in!');
    },

    // () CANNOT ADD MULTIPLE BUDGETS
    addBudgetTotal: async (parent, args, context) => {
      if (context.user) {
        const total = await Budget.create(args);
        return total;
      }
      throw new AuthenticationError('you need to be loggged in!');
    },
    addExpense: async (parent, { budgetId, expenseName, expenseAmount }, context) => {
      if (context.user) {
        const expense = await Budget.findOneAndUpdate(
          { _id: budgetId },
          { $push: { expenses: { expenseName, expenseAmount } } },
          { new: true, runValidators: true }
        );
        return expense;
      }
      throw new AuthenticationError('you need to be loggged in!');
    },
    // ?? Does income need to add the budget total here??
    addIncome: async (parent, { budgetId, incomeAmount }, context) => {
      if (context.user) {
        const incomeCreate = await Budget.findOneAndUpdate(
          { _id: budgetId },
          { $push: { income: { incomeAmount } } },
          { new: true, runValidators: true }
        );
        return incomeCreate;
      }
      throw new AuthenticationError('you need to be loggged in!');
    },
    // UPDATE MUTATIONS
    updateUser: async (parent, { userId, username, email }, context) => {
      console.log(username, email)
      if (context.user) {
        const user = await User.findByIdAndUpdate(userId,
          { $set: { username: username, email: email } },
          { new: true, runValidators: true }
        );
        return user;
      }
      throw new AuthenticationError('you need to be loggged in!');
    },
    updateTodo: async (parent, { todoId, ...args }, context) => {
      if (context.user) {
        const updateTodo = await Todos.findByIdAndUpdate(todoId,
          { $set: { ...args } },
          { new: true, runValidators: true }
        );
        return updateTodo;
      }
      throw new AuthenticationError('you need to be loggged in!');
    },
    updateBudget: async (parent, { budgetId, ...args }, context) => {
      if (context.user) {
        const updateBudget = await Budget.findByIdAndUpdate(budgetId,
          { $set: { ...args } },
          { new: true, runValidators: true }
        );
        return updateBudget;
      }
      throw new AuthenticationError('you need to be loggged in!');
    },
    // STILL NEED UPDATE: expenses, income

    // DELETE MUTATIONS
    deleteUser: async (parent, { _id }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndDelete(_id);
        return updatedUser;
      }
      throw new AuthenticationError('you need to be loggged in!');
    },
    deleteSingleTodo: async (parent, { _id }, context) => {
      if (context.user) {
        const updatedTodos = Todos.findByIdAndDelete(_id);
        return updatedTodos;
      }
      throw new AuthenticationError('you need to be loggged in!');
    },
    deleteBudget: async (parent, { _id }, context) => {
      if (context.user) {
        const updatedBudget = Budget.findByIdAndDelete(_id);
        return updatedBudget;
      }
      throw new AuthenticationError('you need to be loggged in!');
    },
    deleteSingleExpense: async (parent, { budgetId, expenseId }, context) => {
      if (context.user) {
        const deleteExpense = await Budget.findOneAndUpdate(
          { _id: budgetId },
          { $pull: { expenses: { _id: expenseId } } },
          { new: true, runValidators: true }
        );
        return deleteExpense;
      }
      throw new AuthenticationError('you need to be loggged in!');
    },
    deleteSingleIncome: async (parent, { budgetId, incomeId }, context) => {
      if (context.user) {
        const deleteIncome = await Budget.findOneAndUpdate(
          { _id: budgetId },
          { $pull: { income: { _id: incomeId } } },
          { new: true, runValidators: true }
        );
        return deleteIncome;
      }
      throw new AuthenticationError('you need to be loggged in!');
    }
  }
};

module.exports = resolvers;