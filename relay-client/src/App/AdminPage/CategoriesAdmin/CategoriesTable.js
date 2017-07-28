import React from 'react';
import { Col, Table } from 'react-bootstrap';
import { QueryRenderer, graphql } from 'react-relay';
import environment from 'App/environment';
import LoadingSpinner from 'Common/LoadingSpinner';
import ErrorAlert from 'Common/ErrorAlert';
import CategoryRow from './CategoryRow';
import PropTypes from 'prop-types';

const categoriesTableQuery = graphql`
  query CategoriesTableQuery {
    categories {
      ...CategoryRow_category
    }
  }
`;

const CategoriesTable = ({ categories }) =>
  <Col md={12}>
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Labellllllll</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((item, key) => <CategoryRow category={item} key={key} />)}
      </tbody>
    </Table>
  </Col>;

CategoriesTable.propTypes = {
  categories: PropTypes.array.isRequired
};

const CategoriesTableRenderer = ({ match }) =>
  <QueryRenderer
    environment={environment}
    query={categoriesTableQuery}
    variables={{
      count: 12
    }}
    render={({ error, props }) => {
      if (error) return <ErrorAlert error={error} />;

      if (props) return <CategoriesTable {...props} />;

      return <LoadingSpinner />;
    }}
  />;

export default CategoriesTableRenderer;
