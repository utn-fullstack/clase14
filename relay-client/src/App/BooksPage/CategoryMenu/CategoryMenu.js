import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { QueryRenderer, graphql } from 'react-relay';
import { LinkContainer } from 'react-router-bootstrap';
import environment from 'App/environment';
import ErrorAlert from 'Common/ErrorAlert';
import ReactPlaceholder from 'react-placeholder';

const categoryQuery = graphql`
  query CategoryMenuQuery {
    categories {
      id
      label
    }
  }
`;

const CategoryMenu = ({ books, match }) =>
  <QueryRenderer
    environment={environment}
    query={categoryQuery}
    render={({ error, props }) => {
      console.log(error);

      if (error) return <ErrorAlert error={error} />;

      return (
        <ReactPlaceholder rows={7} ready={props} showLoadingAnimation={true}>
          <ListGroup>
            {props &&
              props.categories.map(category =>
                <LinkContainer
                  to={`/category/${category.id}`}
                  isActive={() => match && match.params.id === category.id}
                  key={category.id}
                >
                  <ListGroupItem key={category.id} href="#">
                    {category.label}
                  </ListGroupItem>
                </LinkContainer>
              )}
          </ListGroup>
        </ReactPlaceholder>
      );
    }}
  />;

export default CategoryMenu;
