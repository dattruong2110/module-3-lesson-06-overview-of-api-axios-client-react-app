import axios from "axios";
import React, { Component } from "react";

export class UserWithClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false,
    };
  }

  getUsers = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        axios
          .get("http://localhost:3001/api/users")
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      }, 3000);
    });
  };

  render() {
    const { loading, users } = this.state;
    if (loading) return <>Loading...</>;
    return (
      <>
        <h2>List of Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </>
    );
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.getUsers()
      .then((res) => {
        this.setState({ users: res.data });
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }
}

export default UserWithClassComponent;
