import { gql } from '@apollo/client';

//Execution of me query using Apollo Server
export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title 
        image
        link
      }
    }
  }
`;