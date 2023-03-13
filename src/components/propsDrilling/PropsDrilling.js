import React, { useState } from "react";
import UserList from "./UserList";
import { userData } from "./data";

const PropsDrilling = () => {
  const [users, setUsers] = useState(userData);

  const deleteUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };
  return (
    <div className="--flex-center">
      <div className="--width-500px --my --p">
        <h2>Props Drilling</h2>
        <UserList deleteUser={deleteUser} users={users} />
      </div>
    </div>
  );
};

export default PropsDrilling;
