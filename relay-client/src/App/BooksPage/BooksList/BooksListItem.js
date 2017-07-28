import React from 'react';
import Relay, { graphql } from 'react-relay';
import { Col } from 'react-bootstrap';
import styles from './BooksListItem.css';
import { LinkContainer } from 'react-router-bootstrap';

const booksListItemFragment = graphql`
  fragment BooksListItem_book on Book {
    id
    title
    author
    image
  }
`;

const BooksListItem = ({ book }) =>
  <Col md={4}>
    <section className={styles.aisle}>
      <div className={styles.bookCard}>
        <img className={styles.cover} src={book.image} alt="Portada del libro" />
        <div className={styles.info}>
          <LinkContainer to={`/detail/${book.id}`}>
            <a href="#">
              {book.title.split(': ')[0]}
            </a>
          </LinkContainer>
          <h3 className={styles.author}>
            {book.author}
          </h3>
        </div>
      </div>
    </section>
  </Col>;

export default Relay.createFragmentContainer(BooksListItem, booksListItemFragment);
