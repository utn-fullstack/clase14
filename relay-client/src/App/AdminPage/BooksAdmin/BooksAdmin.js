import React from 'react';
import { PageHeader, Row, Col, Button } from 'react-bootstrap';
import BooksTable from './BooksTable';
import styles from './BooksAdmin.css';
import BookModal from './BookModal';

class BooksAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      tableKey: 'default'
    };
  }

  hideModal() {
    this.setState(prevState => ({
      ...prevState,
      showModal: false
    }));
  }

  showModal() {
    this.setState(prevState => ({
      ...prevState,
      showModal: true
    }));
  }

  onSave(book) {
    this.setState(prevState => ({
      ...prevState,
      table: book.id,
      showModal: false
    }));
  }

  render() {
    const { showModal, table } = this.state;

    return (
      <div>
        <PageHeader>
          Books admin <small>Create, edit and remove books</small>
        </PageHeader>

        <Row>
          <Col md={12}>
            <div className={styles.mainAction}>
              <Button bsStyle="primary" bsSize="xs" onClick={() => this.showModal()}>
                New Book
              </Button>
            </div>
          </Col>
        </Row>

        <Row>
          <BooksTable key={table} />
          <BookModal
            onCancel={() => this.hideModal()}
            show={showModal}
            book={null}
            onSave={book => this.onSave(book)}
          />
        </Row>
      </div>
    );
  }
}

export default BooksAdmin;
