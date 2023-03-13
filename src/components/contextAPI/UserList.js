import React from "react";
import User from "./User";
import { useContext } from "react";
import UserContext from "./userContext";

const UserList = () => {
  //how to use useContext
  const { users } = useContext(UserContext);
  return (
    <div>
      {users.map((user) => {
        return (
          <div className="--card --p --my2 --bg-primary" key={user.id}>
            <User {...user} />
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
