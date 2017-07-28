import React from 'react';
import BooksAdmin from './BooksAdmin';
import CategoriesAdmin from './CategoriesAdmin';
import { Grid, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const AdminPage = props =>
  <Grid>
    <Row className="show-grid">
      <Col xs={12} md={3}>
        <ListGroup>
          <LinkContainer to={`/admin/books`}>
            <ListGroupItem href="#">Books</ListGroupItem>
          </LinkContainer>
          <LinkContainer to={`/admin/categories`}>
            <ListGroupItem href="#">Categories</ListGroupItem>
          </LinkContainer>
        </ListGroup>
      </Col>
      <Col xs={12} md={9}>
        <Switch>
          <Route path="/admin/books" render={() => <BooksAdmin {...props} />} />
          <Route path="/admin/categories" render={() => <CategoriesAdmin {...props} />} />
          <Route path="/admin" render={() => <BooksAdmin {...props} />} />
        </Switch>
      </Col>
    </Row>
  </Grid>;

export default AdminPage;
