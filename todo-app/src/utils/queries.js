import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query CurrentUser($username: String) {
  currentUser(username: $username) {
    _id
    username
    email
    todos {
      _id
      todoName
      createdAt
      username
      recurrence
      dailyReset
    }
    budget {
      _id
      total
      expenses {
        _id
        expenseName
        expenseAmount
      }
      income {
        _id
        incomeAmount
      }
    }
  }
}
`;

export const QUERY_USERS = gql`
query Users {
    users {
      _id
      username
      email
      todos {
        _id
        todoName
        createdAt
        username
        recurrence
        dailyReset
      }
      budget {
        _id
        total
        expenses {
          _id
          expenseName
          expenseAmount
        }
        income {
          _id
          incomeAmount
        }
      }
    }
  }
`;

export const QUERY_TODOS = gql`
query Todos($username: String) {
  todos(username: $username) {
    _id
    todoName
    createdAt
    username
    recurrence
    dailyReset
  }
}
`;

export const QUERY_SINGLETODO = gql`
query SingleTodo($id: ID!) {
  singleTodo(_id: $id) {
    _id
    todoName
    createdAt
    username
    recurrence
    dailyReset
  }
}
`

export const QUERY_BUDGETS =gql`
query Budgets($username: String) {
  budgets(username: $username) {
    _id
    total
    expenses {
      _id
      expenseName
      expenseAmount
    }
    income {
      _id
      incomeAmount
    }
  }
}
`

