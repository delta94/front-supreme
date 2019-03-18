import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { ALL_ITEMS_QUERY } from "./Items";
import { PAGINATION_QUERY } from "./Pagination";

const DELTE_ITEM_MUTATION = gql`
  mutation DELTE_ITEM_MUTATION($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;

class DeleteItem extends Component {
  update = (cache, payload) => {
    const data = cache.readQuery({ query: ALL_ITEMS_QUERY });

    data.items = data.items.filter(item => item.id !== this.props.id);

    cache.writeQuery({ query: ALL_ITEMS_QUERY, data });
  };

  render() {
    return (
      <Mutation
        mutation={DELTE_ITEM_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
        refetchQueries={[
          { query: ALL_ITEMS_QUERY },
          { query: PAGINATION_QUERY }
        ]}
      >
        {(deleteItem, { error }) => {
          return (
            <button
              onClick={() => {
                if (confirm("Are you sure you want to delete this item>")) {
                  deleteItem().catch(err => alert(err.message));
                }
              }}
            >
              {this.props.children}
            </button>
          );
        }}
      </Mutation>
    );
  }
}

export default DeleteItem;
