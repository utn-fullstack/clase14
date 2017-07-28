const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID
} = require('graphql');

const { nodeInterface } = require('../node');

const categoryType = new GraphQLObjectType({
  name: 'Category',
  description: 'Represents a category of books',
  interfaces: [nodeInterface],
  isTypeOf: obj => obj._id.substr(0, 2) === 'CA',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The category unique id.',
      resolve: obj => obj._id
    },
    label: {
      type: GraphQLString,
      description: 'Category label.'
    }
  })
});

exports.categoryType = categoryType;
