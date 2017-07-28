const { nodeDefinitions } = require('graphql-relay');
const model = require('../model');

const { nodeInterface, nodeField } = nodeDefinitions(id => {
  const type = id.substr(0, 2);

  switch (type) {
    case "CA":
      return model.category.getById(id);

    case "BK":
      return model.book.getById(id);

    default:
      return;
  }
});

exports.nodeInterface = nodeInterface;
exports.nodeField = nodeField;