import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form";
import Error from "./ErrorMessage";
import PropTypes from "prop-types";
import { CURRENT_USER_QUERY } from "./User";

const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $resetToken: String!
    $password: String!
    $confirmPassword: String!
  ) {
    resetPassword(
      resetToken: $resetToken
      confirmPassword: $confirmPassword
      password: $password
    ) {
      id
      email
      name
    }
  }
`;

class Reset extends Component {
  state = {
    password: "",
    confirmPassword: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { password, confirmPassword } = this.state;

    return (
      <Mutation
        mutation={RESET_MUTATION}
        variables={{
          resetToken: this.props.resetToken,
          password,
          confirmPassword
        }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(reset, { loading, error, called }) => {
          return (
            <Form
              onSubmit={async e => {
                e.preventDefault();
                // console.log(this.state);
                const res = await reset();
                this.setState({ password: "", confirmPassword: "" });
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Request a password reset</h2>
                {error && <Error error={error} />}

                <label htmlFor="password">
                  Password
                  <input
                    type="password"
                    name="password"
                    required
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                </label>

                <label htmlFor="confirmPassword">
                  Confirm Your Password
                  <input
                    type="password"
                    name="confirmPassword"
                    required
                    placeholder="Confirm Password"
                    onChange={this.handleChange}
                  />
                </label>

                <button type="submit">Reset Your Password</button>
              </fieldset>
            </Form>
          );
        }}
      </Mutation>
    );
  }
}

Reset.propTypes = {
  resetToken: PropTypes.string.isRequired
};

export default Reset;
