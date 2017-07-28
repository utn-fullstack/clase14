/**
 * @flow
 * @relayHash 2286c29335bb2ecfce79cec18a9ad39e
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CategoriesTableQueryResponse = {|
  +categories: ?$ReadOnlyArray<?{| |}>;
|};
*/


/*
query CategoriesTableQuery {
  categories {
    ...CategoryRow_category
    id
  }
}

fragment CategoryRow_category on Category {
  id
  label
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CategoriesTableQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Category",
        "name": "categories",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "CategoryRow_category",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "CategoriesTableQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "CategoriesTableQuery",
    "operation": "query",
    "selections": [
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
            "kind": "InlineFragment",
            "type": "Category",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "label",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query CategoriesTableQuery {\n  categories {\n    ...CategoryRow_category\n    id\n  }\n}\n\nfragment CategoryRow_category on Category {\n  id\n  label\n}\n"
};

module.exports = batch;
