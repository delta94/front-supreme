import React from "react";
import { Query, Mutation } from "react-apollo";
import Error from "./ErrorMessage";
import gql from "graphql-tag";
import Table from "./styles/Table";
import SickButton from "./styles/SickButton";
import PropTypes from "prop-types";

const possiblePermissions = [
  "ADMIN",
  "USER",
  "ITEMCREATE",
  "ITEMUPDATE",
  "ITEMDELETE",
  "PERMISSIONUPDATE"
];

const UPDATE_PERMISSIONS_MUTATION = gql`
  mutation($permissions: [Permission], $userId: ID!) {
    updatePermissions(permissions: $permissions, userId: $userId) {
      id
      permissions
      name
      email
    }
  }
`;

const ALL_USER_QUERY = gql`
  query {
    users {
      id
      name
      email
      permissions
    }
  }
`;

const Permissions = () => {
  return (
    <Query query={ALL_USER_QUERY}>
      {({ data, loading, error }) => {
        return (
          <React.Fragment>
            {error && <Error error={error} />}
            <div>
              <h2>Manage Permissions</h2>
              <Table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    {possiblePermissions.map((item, index) => (
                      <th key={index}>{item}</th>
                    ))}
                    <th>👇🏻</th>
                  </tr>
                </thead>
                <tbody>
                  {data.users &&
                    data.users.map((user, index) => (
                      <UserPermission key={index} user={user} />
                    ))}
                </tbody>
              </Table>
            </div>
          </React.Fragment>
        );
      }}
    </Query>
  );
};

class UserPermission extends React.Component {
  state = {
    permissions: this.props.user.permissions
  };

  handleChange = e => {
    const checkbox = e.target;
    let updatedPermissions = [...this.state.permissions];

    if (checkbox.checked) {
      updatedPermissions.push(checkbox.value);
    } else {
      updatedPermissions = updatedPermissions.filter(
        item => item !== checkbox.value
      );
    }

    this.setState({ permissions: updatedPermissions });
  };

  render() {
    const { user } = this.props;
    return (
      <Mutation
        mutation={UPDATE_PERMISSIONS_MUTATION}
        variables={{ userId: user.id, permissions: this.state.permissions }}
      >
        {(updatePermissions, { data, loading, error }) => {
          return (
            <React.Fragment>
              {error && (
                <tr>
                  <td colSpan="8">
                    <Error error={error} />
                  </td>
                </tr>
              )}
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                {possiblePermissions.map((item, index) => (
                  <td key={index}>
                    <label htmlFor={`${user.id}-permission-${item}`}>
                      <input
                        type="checkbox"
                        checked={this.state.permissions.includes(item)}
                        onChange={this.handleChange}
                        value={item}
                        id={`${user.id}-permission-${item}`}
                      />
                    </label>
                  </td>
                ))}
                <td>
                  <SickButton
                    type="button"
                    disabled={loading}
                    onClick={updatePermissions}
                  >
                    Updat{loading ? "ing" : "e"}
                  </SickButton>
                </td>
              </tr>
            </React.Fragment>
          );
        }}
      </Mutation>
    );
  }
}

UserPermission.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.string,
    permissions: PropTypes.array
  }).isRequired
};

export default Permissions;
