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
    mutation addTodos($todoName: String!, $recurrence: String!, $dailyReset: Boolean!, $username: String!) {
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

export const UPDATE_INCOME = gql`
mutation UpdateIncome($budgetId: ID!, $incomeAmount: Int!) {
  updateIncome(budgetId: $budgetId, incomeAmount: $incomeAmount) {
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

export const DELETE_USER = gql`
mutation DeleteUser($id: ID!) {
  deleteUser(_id: $id) {
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

export const DELETE_SINGLE_TODO = gql`
mutation DeleteSingleTodo($id: ID!) {
  deleteSingleTodo(_id: $id) {
    _id
    todoName
    createdAt
    username
    recurrence
    dailyReset
  }
}
`

export const DELETE_BUDGET = gql`
mutation DeleteBudget($id: ID!) {
  deleteBudget(_id: $id) {
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

export const DELETE_SINGLE_EXPENSE = gql`
mutation DeleteSingleExpense($budgetId: ID!, $expenseId: ID!) {
  deleteSingleExpense(budgetId: $budgetId, expenseId: $expenseId) {
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

export const DELETE_SINGLE_INCOME = gql`
mutation DeleteSingleIncome($budgetId: ID!, $incomeId: ID!) {
  deleteSingleIncome(budgetId: $budgetId, incomeId: $incomeId) {
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





