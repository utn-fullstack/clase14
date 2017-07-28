const mongo = require('./mongo');
const shortid = require('shortid');

const newCatId = () => 'CA-' + shortid.generate();

exports.add = category =>
  mongo.collection('categories').then(col => {
    category._id = newCatId();
    return col.insert(category);
  });

exports.update = category =>
  mongo.collection('categories').then(col => {
    return col.findOneAndUpdate({ _id: category._id }, category);
  });

exports.remove = id =>
  mongo.collection('categories').then(col => {
    return col.findOneAndDelete({ _id: id });
  });

exports.getAll = () =>
  mongo.collection('categories').then(col => {
    return col.find().toArray();
  });

exports.getById = id =>
  mongo.collection('categories').then(col => {
    return col.findOne({ _id: id });
  });

exports.getByIds = ids =>
  mongo.collection('categories').then(col => {
    return col.find({ _id: { $in: ids } }).toArray();
  });
