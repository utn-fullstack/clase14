const mongo = require('./mongo');
const shortid = require('shortid');

const newBookId = () => 'BK-' + shortid.generate();

exports.add = book =>
  mongo.collection('books').then(col => {
    book._id = newBookId();
    return col.insert(book).then(r => book);
  });

exports.update = book =>
  mongo.collection('books').then(col => {
    const bookData = Object.assign(book, { _id: book.id }, { id: undefined });
    return col.findOneAndUpdate({ _id: bookData._id }, bookData).then(r => book);
  });

exports.remove = id =>
  mongo.collection('books').then(col => {
    return col.findOneAndDelete({ _id: id }).then(r => {
      if (r.lastErrorObject && r.lastErrorObject.n === 0) {
        return Promise.reject(new Error('Book not found'));
      }
      return r.value;
    });
  });

exports.getAll = () =>
  mongo.collection('books').then(col => {
    return col.find().sort({ $natural: -1 });
  });

exports.getById = id =>
  mongo.collection('books').then(col => {
    return col.findOne({ _id: id });
  });

exports.getByCategoryId = id =>
  mongo.collection('books').then(col => {
    return col.find({ categories: id });
  });
