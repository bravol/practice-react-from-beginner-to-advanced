import React from "react";
import User from "./User";

const UserList = ({ users, deleteUser }) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <div className="--card --p --my2 --bg-primary" key={user.id}>
            <User {...user} deleteUser={deleteUser} />
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
