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
          
        }
        income {
          
        }
      }
    }
  }
  `;