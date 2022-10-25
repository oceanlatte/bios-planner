// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        email: String
        todos: [ToDos]
        budget: [Budget]
    }

    type ToDos {
        _id: ID
        todoName: String!
        createdAt: String
        username: String
        recurrence: String!
        dailyReset: Boolean!
    }

    type Budget {
        _id: ID
        expenseName: String!
        expenseAmount: Int!
        income: Int!
        total: Int!
    }

    type Query {
        currentUser: User
        todos: [ToDos]
        todos(_id: ID!): ToDos
        budget: [Budget]
        singleExpense: Budget
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): User
        addToDos(todoName: String!, recurrence: String!, dailyReset: Boolean!): ToDos
        addBudgetTotal(total: Int!): Budget
        addBudgetExpense(expenseName: String!, expenseAmount: Int!): Budget
    }
`;

// export the typeDefs
module.exports = typeDefs;
