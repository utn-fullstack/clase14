import React from 'react';
import { PageHeader, Row, Col, Button } from 'react-bootstrap';
import CategoriesTable from './CategoriesTable';
import styles from './CategoriesAdmin.css';

const CategoriesAdmin = () =>
  <div>
    <PageHeader>
      Categories admin <small>Create, edit and remove Categories</small>
    </PageHeader>

    <Row>
      <Col md={12}>
        <div className={styles.mainAction}>
          <Button bsStyle="primary" bsSize="xs" onClick={() => this.addCategory()}>
            New Category
          </Button>
        </div>
      </Col>
    </Row>

    <Row>
      <CategoriesTable />
    </Row>
  </div>;

export default CategoriesAdmin;
