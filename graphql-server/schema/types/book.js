const { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID, GraphQLList } = require('graphql');
const { connectionDefinitions, mutationWithClientMutationId } = require('graphql-relay');
const { categoryType } = require('./category');
const { nodeInterface } = require('../node');
const model = require('../../model');

const bookType = new GraphQLObjectType({
  name: 'Book',
  description: 'Represents a book of the catalog.',
  interfaces: [nodeInterface],
  isTypeOf: obj => obj._id.substr(0, 2) === 'BK',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The book unique id.',
      resolve: book => book._id
    },
    title: {
      type: GraphQLString,
      description: 'The book title.'
    },
    type: {
      type: GraphQLString,
      description: 'The book title.',
      resolve: () => 'BK'
    },
    author: {
      type: GraphQLString,
      description: 'The author name.'
    },
    image: {
      type: GraphQLString,
      description: 'The book cover.'
    },
    categories: {
      type: new GraphQLList(categoryType),
      description: 'The book categories.',
      resolve: book => model.category.getByIds(book.categories)
    }
  })
});

const createBook = mutationWithClientMutationId({
  name: 'CreateBook',
  inputFields: {
    title: {
      type: GraphQLString,
      description: 'The book title.'
    },
    author: {
      type: GraphQLString,
      description: 'The author name.'
    },
    image: {
      type: GraphQLString,
      description: 'The book cover.'
    },
    categories: {
      type: new GraphQLList(GraphQLString),
      description: 'The book categories.'
    }
  },
  outputFields: {
    book: {
      type: bookType,
      resolve: payload => payload
    }
  },
  mutateAndGetPayload: bookData => model.book.add(bookData)
});

const updateBook = mutationWithClientMutationId({
  name: 'UpdateBook',
  inputFields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The book unique id.'
    },
    title: {
      type: GraphQLString,
      description: 'The book title.'
    },
    author: {
      type: GraphQLString,
      description: 'The author name.'
    },
    image: {
      type: GraphQLString,
      description: 'The book cover.'
    },
    categories: {
      type: new GraphQLList(GraphQLString),
      description: 'The book categories.'
    }
  },
  outputFields: {
    book: {
      type: bookType,
      resolve: payload => payload
    }
  },
  mutateAndGetPayload: bookData => model.book.update(bookData)
});

const deleteBook = mutationWithClientMutationId({
  name: 'DeleteBook',
  inputFields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The book unique id.'
    }
  },
  outputFields: {
    book: {
      type: bookType,
      resolve: payload => payload
    }
  },
  mutateAndGetPayload: ({ id }) => model.book.remove(id)
});

const { connectionType } = connectionDefinitions({ nodeType: bookType });

exports.bookType = bookType;

exports.bookMutation = {
  createBook,
  updateBook,
  deleteBook
};

exports.bookConnection = connectionType;
