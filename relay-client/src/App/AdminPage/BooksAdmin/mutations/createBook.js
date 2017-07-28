import environment from 'App/environment';
import { commitMutation, graphql } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';
import storeDebugger from 'relay-runtime/lib/RelayStoreProxyDebugger';

const createBookMutation = graphql`
  mutation createBookMutation($book: CreateBookInput!) {
    createBook(input: $book) {
      book {
        id
        title
        author
        image
        categories {
          id
          label
        }
      }
      clientMutationId
    }
  }
`;

const createBook = (book, onCompleted, onError) =>
  commitMutation(environment, {
    mutation: createBookMutation,
    variables: { book },
    onCompleted,
    onError
  });

export default createBook;
