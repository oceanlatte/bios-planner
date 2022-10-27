// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        todos: [Todos]
        budget: [Budget]
    }

    type Todos {
        _id: ID
        todoName: String!
        createdAt: String
        username: String
        recurrence: String!
        dailyReset: Boolean!
    }

    type Budget {
        _id: ID
        total: Int!
        expense: [Expense]
        income: [Income]
    }

    type Expense {
        _id: ID
        expenseName: String!
        expenseAmount: Int!
    }

    type Income {
        _id: ID
        amount: Int!
    }

    type Query {
        currentUser(username: String): User
        todos: [Todos]
        singleTodo(_id: ID!): Todos
        budget: [Budget]
        expenses: [Expense]
        income: [Income]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): User
        addTodos(todoName: String!, recurrence: String!, dailyReset: Boolean!): Todos
        addBudgetTotal(total: Int!): Budget
        addExpense(expenseName: String!, expenseAmount: Int!): Budget
        addIncome(income: Int!): Budget
        updateUser(email: String, password: String): User
        updateTodo(todoName: String, recurrence: String!, dailyReset: Boolean): Todos
        updateExpense(expenseName: String, expenseAmount: String): Budget
        updateIncome(income: Int): Budget
        updateBudgetTotal(total: Int): Budget
        deleteUser(_id: ID!): User
        deleteSingleTodo(_id: ID!): Todos
        deleteSingleExpense(_id: ID!): Budget
        deleteSingleIncome(_id: ID!): Budget
        deleteBudget(_id: ID!): Budget
    }
`;

// export the typeDefs
module.exports = typeDefs;
