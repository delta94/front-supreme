import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { Mutation } from "react-apollo";
import Router from "next/router";
import NProgress from "nprogress";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import calcTotalPrice from "../lib/calcTotalPrice";
import Error from "./ErrorMessage";
import User, { CURRENT_USER_QUERY } from "./User";

const CREATE_ORDER_MUTATION = gql`
  mutation($token: String!) {
    createOrder(token: $token) {
      id
      charge
      total
      items {
        id
        title
      }
    }
  }
`;

const totalItems = cart => {
  return cart.reduce((item1, item2) => item1 + item2.quantity, 0);
};

class TakeMyMoney extends Component {
  onToken = async (res, createOrder) => {
    // NProgress.start();
    const order = await createOrder({
      variables: {
        token: res.id
      }
    }).catch(err => alert(err.message));

    Router.push({
      pathname: "/order",
      query: { id: order.data.createOrder.id }
    });
  };

  render() {
    return (
      <User>
        {({ data: { me } }) => {
          return (
            <Mutation
              mutation={CREATE_ORDER_MUTATION}
              refetchQueries={[{ query: CURRENT_USER_QUERY }]}
            >
              {createOrder => {
                return (
                  <StripeCheckout
                    amount={calcTotalPrice(me.cart)}
                    name="Supreme"
                    description={`Oder of ${totalItems(me.cart)} items!`}
                    image={
                      me.cart.length && me.cart[0].item && me.cart[0].item.image
                    }
                    stripeKey={`pk_test_fm3f1nL7BFBmXMuLC5OawOPz`}
                    currency="USD"
                    email={me.email}
                    token={res => this.onToken(res, createOrder)}
                  >
                    {this.props.children}
                  </StripeCheckout>
                );
              }}
            </Mutation>
          );
        }}
      </User>
    );
  }
}

export default TakeMyMoney;
