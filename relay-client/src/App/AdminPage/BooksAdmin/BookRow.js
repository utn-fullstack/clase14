import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import Relay, { graphql } from 'react-relay';
import styles from './BookRow.css';

const bookFragment = graphql`
  fragment BookRow_book on Book {
    id
    title
    author
    image
  }
`;

const BookRow = ({ book }) =>
  <tr key={book.id}>
    <td>
      {book.id}
    </td>
    <td>
      {book.title}
    </td>
    <td>
      {book.author}
    </td>
    <td>
      <ButtonToolbar className={styles.toolbar}>
        <Button bsStyle="info" bsSize="xsmall">
          Edit
        </Button>
        <Button bsStyle="danger" bsSize="xsmall">
          Remove
        </Button>
      </ButtonToolbar>
    </td>
  </tr>;

export default Relay.createFragmentContainer(BookRow, bookFragment);
