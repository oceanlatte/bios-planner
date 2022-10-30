import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TODOS = gql`
    mutation AddTodos($todoName: String!, $recurrence: String!, $dailyReset: Boolean!, $username: String!) {
  addTodos(todoName: $todoName, recurrence: $recurrence, dailyReset: $dailyReset, username: $username) {
    _id
    todoName
    createdAt
    username
    recurrence
    dailyReset
  }
}
`;

export const ADD_BUDGET_TOTAL = gql`
    mutation AddBudgetTotal($total: Int!) {
  addBudgetTotal(total: $total) {
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
`;

export const ADD_EXPENSE = gql`
    mutation AddExpense($budgetId: ID!, $expenseName: String!, $expenseAmount: Int!) {
  addExpense(budgetId: $budgetId, expenseName: $expenseName, expenseAmount: $expenseAmount) {
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
`;

export const ADD_INCOME = gql`
    mutation AddIncome($budgetId: ID!, $incomeAmount: Int!) {
  addIncome(budgetId: $budgetId, incomeAmount: $incomeAmount) {
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
`;

export const UPDATE_USER = gql`
mutation UpdateUser($userId: ID!, $username: String!, $email: String!) {
  updateUser(userId: $userId, username: $username, email: $email) {
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

export const UPDATE_TODO = gql`
mutation UpdateTodo($todoId: ID!, $recurrence: String!, $dailyReset: Boolean!) {
  updateTodo(todoId: $todoId, recurrence: $recurrence, dailyReset: $dailyReset) {
    _id
    todoName
    createdAt
    username
    recurrence
    dailyReset
  }
}
`;

export const UPDATE_BUDGET = gql`
mutation UpdateBudget($budgetId: ID!) {
  updateBudget(budgetId: $budgetId) {
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
`;

export const UPDATE_EXPENSE = gql`
mutation UpdateExpense($budgetId: ID!, $expenseId: ID!, $expenseName: String!, $expenseAmount: Int!) {
  updateExpense(budgetId: $budgetId, expenseId: $expenseId, expenseName: $expenseName, expenseAmount: $expenseAmount) {
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

