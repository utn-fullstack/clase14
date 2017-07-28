/**
 * @flow
 * @relayHash c8464fd8f15d7e4e3dc865b4f5f3cd56
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type createBookMutationVariables = {|
  book: {
    title?: ?string;
    author?: ?string;
    image?: ?string;
    categories?: ?$ReadOnlyArray<?string>;
    clientMutationId?: ?string;
  };
|};

export type createBookMutationResponse = {|
  +createBook: ?{|
    +book: ?{|
      +id: string;
      +title: ?string;
      +author: ?string;
      +image: ?string;
      +categories: ?$ReadOnlyArray<?{|
        +id: string;
        +label: ?string;
      |}>;
    |};
    +clientMutationId: ?string;
  |};
|};
*/


/*
mutation createBookMutation(
  $book: CreateBookInput!
) {
  createBook(input: $book) {
    book {
      id
      title
      author
      image
      categories {
        id
        label
      }
    }
    clientMutationId
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "book",
        "type": "CreateBookInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "createBookMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "book",
            "type": "CreateBookInput!"
          }
        ],
        "concreteType": "CreateBookPayload",
        "name": "createBook",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Book",
            "name": "book",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "title",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "author",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "image",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Category",
                "name": "categories",
                "plural": true,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "label",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "clientMutationId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "createBookMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "book",
        "type": "CreateBookInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "createBookMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "book",
            "type": "CreateBookInput!"
          }
        ],
        "concreteType": "CreateBookPayload",
        "name": "createBook",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Book",
            "name": "book",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "title",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "author",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "image",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Category",
                "name": "categories",
                "plural": true,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "label",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "clientMutationId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation createBookMutation(\n  $book: CreateBookInput!\n) {\n  createBook(input: $book) {\n    book {\n      id\n      title\n      author\n      image\n      categories {\n        id\n        label\n      }\n    }\n    clientMutationId\n  }\n}\n"
};

module.exports = batch;
