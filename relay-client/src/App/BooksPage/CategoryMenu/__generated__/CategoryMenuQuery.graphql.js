/**
 * @flow
 * @relayHash 0879906d643eb22b2c6c553f54c70765
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CategoryMenuQueryResponse = {|
  +categories: ?$ReadOnlyArray<?{|
    +id: string;
    +label: ?string;
  |}>;
|};
*/


/*
query CategoryMenuQuery {
  categories {
    id
    label
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CategoryMenuQuery",
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
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "CategoryMenuQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "CategoryMenuQuery",
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
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "label",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query CategoryMenuQuery {\n  categories {\n    id\n    label\n  }\n}\n"
};

module.exports = batch;
