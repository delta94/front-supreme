import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form";
import Error from "./ErrorMessage";

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

class RequestReset extends Component {
  state = {
    email: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email } = this.state;

    return (
      <Mutation mutation={REQUEST_RESET_MUTATION} variables={this.state}>
        {(requestReset, { loading, error, called }) => {
          return (
            <Form
              onSubmit={async e => {
                e.preventDefault();
                const res = await requestReset();
                this.setState({ email: "" });
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Request a password reset</h2>
                {error && <Error error={error} />}
                {!error && !loading && called && (
                  <p>Success! Check your email for a reset link!</p>
                )}
                <label htmlFor="email">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    required
                    onChange={this.handleChange}
                  />
                </label>

                <button type="submit">Request Reset</button>
              </fieldset>
            </Form>
          );
        }}
      </Mutation>
    );
  }
}

export default RequestReset;
