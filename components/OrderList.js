import React, { Component } from "react";
import { Query } from "react-apollo";
import Link from "next/link";
import styled from "styled-components";
import gql from "graphql-tag";
import formatMoney from "../lib/formatMoney";
import OrderItemStyles from "./styles/OrderItemStyles";
import Error from "./ErrorMessage";
import moment from "moment";

const USER_ORDERS_QUERY = gql`
  query {
    orders(orderBy: createdAt_DESC) {
      id
      total
      createdAt
      items {
        id
        title
        price
        description
        quantity
        image
      }
    }
  }
`;

const OrderUI = styled.ul`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
`;

class OrderList extends Component {
  render() {
    return (
      <Query query={USER_ORDERS_QUERY}>
        {({ data: { orders }, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <Error error={error} />;
          return (
            <div>
              <h2>You have {orders.length} orders</h2>
              <OrderUI>
                {orders.map((item, index) => (
                  <OrderItemStyles key={index}>
                    <Link prefetch href={`/order?id=${item.id}`}>
                      <a>
                        <div className="order-meta">
                          <p>
                            {item.items.reduce((a, b) => a + b.quantity, 0)}{" "}
                            Items
                          </p>
                          <p>{item.items.length} Products</p>
                          <p>
                            {moment(item.createdAt)
                              .startOf("day")
                              .fromNow()}
                          </p>
                          <p>{formatMoney(item.total)}</p>
                        </div>
                        <div className="images">
                          {item.items.map((item, index) => (
                            <img
                              key={index}
                              src={item.image}
                              alt={item.title}
                            />
                          ))}
                        </div>
                      </a>
                    </Link>
                  </OrderItemStyles>
                ))}
              </OrderUI>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default OrderList;
