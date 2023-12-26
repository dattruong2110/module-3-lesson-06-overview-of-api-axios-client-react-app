import axios from "axios";
import React, { useEffect, useState } from "react";

const UserWithFunctionalComponent = () => {
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://localhost:3001/api/users")
        .then((res) => {
          setUsers(res.data);
          setLoading(false);
        })
        .catch((err) => {
          throw err;
        });
    }, 3000);
  }, []);

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
};

export default UserWithFunctionalComponent;
