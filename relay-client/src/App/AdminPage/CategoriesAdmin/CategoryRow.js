import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import Relay, { graphql } from 'react-relay';
import PropTypes from 'prop-types';
import styles from './CategoryRow.css';

const categoryFragment = graphql`
  fragment CategoryRow_category on Category {
    id
    label
  }
`;

const CategoryRow = ({ category }) =>
  <tr key={category.id}>
    <td>
      {category.id}
    </td>
    <td>
      {category.label}
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

CategoryRow.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired
};

export default Relay.createFragmentContainer(CategoryRow, categoryFragment);
