/**
 * @flow
 * @relayHash 2cb5cc74c35b6c6bcbb6ce36b7d8a598
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CategorySelectorQueryResponse = {|
  +categories: ?$ReadOnlyArray<?{|
    +id: string;
    +label: ?string;
  |}>;
|};
*/


/*
query CategorySelectorQuery {
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
    "name": "CategorySelectorQuery",
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
  "name": "CategorySelectorQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "CategorySelectorQuery",
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
  "text": "query CategorySelectorQuery {\n  categories {\n    id\n    label\n  }\n}\n"
};

module.exports = batch;
