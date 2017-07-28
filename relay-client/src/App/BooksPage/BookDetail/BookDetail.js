import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import { Row, Col, Image, Label } from 'react-bootstrap';
import styles from './BookDetail.css';
import environment from 'App/environment';
import LoadingSpinner from 'Common/LoadingSpinner';
import ErrorAlert from 'Common/ErrorAlert';

const bookQuery = graphql`
  query BookDetailRendererQuery($bookId: String!) {
    book(id: $bookId) {
      id
      title
      image
      author
      categories {
        id
        label
      }
    }
  }
`;

const Book = ({ book }) =>
  <Row>
    <Col md={4}>
      <Image src={book.image} rounded responsive />
    </Col>
    <Col md={8}>
      <h2>
        {book.title}
      </h2>
      <p>
        By: {book.author}
      </p>
      <p>
        {book.categories.map(item =>
          <Label className={styles.catLabel} bsStyle="primary">
            {item.label}
          </Label>
        )}
      </p>
    </Col>
  </Row>;

const BookDetail = ({ books, match }) =>
  <QueryRenderer
    environment={environment}
    query={bookQuery}
    variables={{
      bookId: match && match.params.bookId
    }}
    render={({ error, props }) => {
      console.log(props);

      if (error)
        return (
          <Row>
            <ErrorAlert error={error} />
          </Row>
        );

      if (props) return <Book {...props} />;

      return (
        <Row>
          <LoadingSpinner />
        </Row>
      );
    }}
  />;

export default BookDetail;
