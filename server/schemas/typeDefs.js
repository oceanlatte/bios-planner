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
        username: String!
        recurrence: String!
        dailyReset: Boolean!
    }

    type Expense {
        _id: ID
        expenseName: String!
        expenseAmount: Int!
    }

    type Incomes {
        _id: ID
        incomeAmount: Int!
    }

    type Budget {
        _id: ID
        total: Int!
        expenses: [Expense]
        income: [Incomes]
    }

    type Auth{
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        currentUser(username: String): User
        todos(username: String): [Todos]
        singleTodo(_id: ID!): Todos
        budgets(username: String): [Budget]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addTodos(todoName: String!, recurrence: String!, dailyReset: Boolean!, username: String!): Todos
        addBudgetTotal(total: Int!): Budget
        addExpense(budgetId: ID!, expenseName: String!, expenseAmount: Int!): Budget
        addIncome(budgetId: ID!, incomeAmount: Int!): Budget
        updateUser(userId: ID!, username: String!, email: String!): User
        updateTodo(todoId: ID!, todoName: String, recurrence: String!, dailyReset: Boolean!, username: String): Todos
        updateBudget(budgetId: ID!, total: Int): Budget
        updateExpense(budgetId: ID!, expenseId: ID!, expenseName: String!, expenseAmount: Int!): Budget
        updateIncome(budgetId: ID!, incomeAmount: Int!): Budget
        deleteUser(_id: ID!): User
        deleteSingleTodo(_id: ID!): Todos
        deleteBudget(_id: ID!): Budget
        deleteSingleExpense(budgetId: ID!, expenseId: ID!): Budget
        deleteSingleIncome(budgetId: ID!, incomeId: ID!): Budget
    }
`;

// export the typeDefs
module.exports = typeDefs;
