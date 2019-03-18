import React from "react";
import Link from "next/link";
import NavStyles from "./styles/NavStyles";
import User from "./User";
import Signout from "./Signout";
import { Mutation } from "react-apollo";
import { TOGGLE_CART_MUTAION } from "./Cart";
import CartCount from "./CartCount";

const Nav = () => {
  return (
    <User>
      {({ data: { me } }) => (
        <NavStyles>
          <Link href="/items" prefetch>
            <a>Shop</a>
          </Link>

          {me && (
            <React.Fragment>
              <Link href="/sell" prefetch>
                <a>Sell</a>
              </Link>

              <Link href="/orders" prefetch>
                <a>Orders</a>
              </Link>

              {/* <Link href="/me" prefetch>
                <a>Account</a>
              </Link> */}
              <Signout />
              <Mutation mutation={TOGGLE_CART_MUTAION}>
                {toggleCart => (
                  <button onClick={toggleCart}>
                    My Cart
                    <CartCount
                      count={me.cart.reduce(
                        (item1, item2) => item1 + item2.quantity,
                        0
                      )}
                    />
                  </button>
                )}
              </Mutation>
            </React.Fragment>
          )}

          {!me && (
            <Link href="/signup" prefetch>
              <a>Sign In</a>
            </Link>
          )}
        </NavStyles>
      )}
    </User>
  );
};

export default Nav;
