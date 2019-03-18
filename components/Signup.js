import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form";
import Error from "./ErrorMessage";
import { CURRENT_USER_QUERY } from "./User";

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $password: String!
    $name: String!
  ) {
    signup(email: $email, password: $password, name: $name) {
      id
      email
      name
    }
  }
`;

class Signup extends Component {
  state = {
    email: "",
    password: "",
    name: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <Mutation
        mutation={SIGNUP_MUTATION}
        variables={this.state}
        refetchQueries={() => [{ query: CURRENT_USER_QUERY }]}
      >
        {(signup, { loading, error }) => {
          return (
            <Form
              onSubmit={async e => {
                e.preventDefault();
                const res = await signup();
                this.setState({ email: "", name: "", password: "" });
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Sign Up for An Account</h2>
                {error && <Error error={error} />}
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

                <label htmlFor="name">
                  Name
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={name}
                    required
                    onChange={this.handleChange}
                  />
                </label>

                <label htmlFor="password">
                  Password
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    required
                    onChange={this.handleChange}
                  />
                </label>

                <button type="submit">Sign Up!</button>
              </fieldset>
            </Form>
          );
        }}
      </Mutation>
    );
  }
}

export default Signup;
