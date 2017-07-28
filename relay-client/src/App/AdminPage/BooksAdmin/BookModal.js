import React, { Component } from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl, Alert } from 'react-bootstrap';
import createBookMutation from './mutations/createBook';
import CategorySelector from './CategorySelector';

class BookModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: props.book || {
        title: '',
        author: '',
        image: '',
        categories: []
      },
      loading: false,
      error: null
    };
  }

  componentWillReceiveProps(nextProps) {
    const { book } = nextProps;

    this.setState(prevState => ({
      ...prevState,
      book: book || {
        title: '',
        author: '',
        image: '',
        categories: []
      }
    }));
  }

  handleChange(e, key) {
    console.log('handleChange');
    const value = e.target.value;

    this.setState(prevState => ({
      ...prevState,
      book: {
        ...prevState.book,
        [key]: value
      }
    }));
  }

  handleSave() {
    const { book } = this.state;
    book.id ? this.update(book) : this.save(book);
  }

  save(book) {
    this.setState(prevState => ({
      ...prevState,
      loading: true,
      error: null
    }));
    createBookMutation(
      book,
      response => this.props.onSave(response.createBook.book),
      err =>
        this.setState(prevState => ({
          ...prevState,
          loading: false,
          error: err
        }))
    );
  }

  update(book) {}

  updateCategories(data) {
    this.setState(prevState => ({
      ...prevState,
      book: {
        ...prevState.book,
        categories: data.map(item => item.value)
      }
    }));
  }

  render() {
    const { onCancel, show } = this.props;
    const { book, loading, error } = this.state;
    const edit = book && book.id;
    const title = edit ? 'Edit book' : 'Create Book';

    return (
      <Modal show={show} onHide={() => onCancel()}>
        <Modal.Header closeButton>
          <Modal.Title>
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error &&
            <Alert bsStyle="warning">
              <strong>Error!</strong> {error}
            </Alert>}
          <form>
            <FormGroup controlId="bookForm">
              <ControlLabel>Title</ControlLabel>
              <FormControl
                type="text"
                value={book.title}
                placeholder="book title"
                onChange={e => this.handleChange(e, 'title')}
              />
            </FormGroup>
            <FormGroup controlId="bookForm">
              <ControlLabel>Author</ControlLabel>
              <FormControl
                type="text"
                value={book.author}
                placeholder="book author"
                onChange={e => this.handleChange(e, 'author')}
              />
            </FormGroup>
            <FormGroup controlId="bookForm">
              <ControlLabel>Title</ControlLabel>
              <FormControl
                type="text"
                value={book.image}
                placeholder="book cover image"
                onChange={e => this.handleChange(e, 'image')}
              />
            </FormGroup>
            <FormGroup controlId="bookForm">
              <ControlLabel>Categories</ControlLabel>
              <CategorySelector value={book.categories} onChange={data => this.updateCategories(data)} />
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.handleSave()} disabled={loading}>
            Save
          </Button>
          <Button onClick={() => onCancel()} disabled={loading}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default BookModal;
