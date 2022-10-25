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
        expenseName: String
        expenseAmount: Int
        income: Int 
        total: Int!
    }
`;

// export the typeDefs
module.exports = typeDefs;
