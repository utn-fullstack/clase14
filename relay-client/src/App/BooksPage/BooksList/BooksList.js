import React, { Component } from 'react';
import Relay, { QueryRenderer, graphql } from 'react-relay';
import environment from 'App/environment';
import { Row } from 'react-bootstrap';
import LoadingSpinner from 'Common/LoadingSpinner';
import ErrorAlert from 'Common/ErrorAlert';
import BooksListItem from './BooksListItem';
import ReactScrollPagination from 'react-scroll-pagination';

const bookListQuery = graphql`
  query BooksListQuery($categoryId: String, $count: Int!, $cursor: String) {
    ...BooksListContainer_result
  }
`;

const bookListPaginationFragment = graphql`
  fragment BooksListContainer_result on Query {
    books(first: $count, categoryId: $categoryId, after: $cursor) @connection(key: "BooksList_books") {
      edges {
        node {
          ...BooksListItem_book
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;

class BooksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: this.props.relay.isLoading(),
      error: null
    };
  }

  loadMore() {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) return;

    this.setState(prevState => ({ ...prevState, loading: true }));

    this.props.relay.loadMore(12, error => {
      if (error) {
        return this.setState(prevState => ({ ...prevState, loading: false, error }));
      }

      this.setState(prevState => ({ ...prevState, loading: false }));
    });
  }

  render() {
    const { relay, result } = this.props;
    const { loading, error } = this.state;

    if (result)
      return (
        <Row>
          {result.books.edges.map((edge, key) => <BooksListItem key={key} book={edge.node} />)}

          {relay.hasMore() &&
            !loading &&
            <ReactScrollPagination fetchFunc={() => this.loadMore()} excludeElement=".navbar" triggerAt={300} />}

          {loading && <LoadingSpinner />}

          {error && <ErrorAlert error={error} />}
        </Row>
      );
  }
}

// PaginationContainer

const BooksListContainer = Relay.createPaginationContainer(BooksList, bookListPaginationFragment, {
  query: bookListQuery,
  direction: 'forward',

  getConnectionFromProps(props) {
    return props.result && props.result.books;
  },

  getFragmentVariables(prevVars, totalCount) {
    return {
      ...prevVars,
      count: totalCount
    };
  },

  getVariables(props, { count, cursor }, fragmentVariables) {
    return {
      count,
      cursor,
      categoryId: fragmentVariables.categoryId
    };
  }
});

// QueryRenderer

const BooksListRenderer = ({ books, match }) =>
  <QueryRenderer
    environment={environment}
    query={bookListQuery}
    variables={{
      categoryId: match && match.params.id,
      count: 12
    }}
    render={({ error, props }) => {
      if (error)
        return (
          <Row>
            <ErrorAlert error={error} />
          </Row>
        );

      if (props) return <BooksListContainer result={props} />;

      return (
        <Row>
          <LoadingSpinner />
        </Row>
      );
    }}
  />;

export default BooksListRenderer;
