import { useState } from "react";
import UserList from "./UserList";
import { userData } from "./data";
import UserContext from "./userContext";

//USE CASES FOR CONTEXT API
//CONTEXT API works like prop drilling but it is much better and advanced than props drilling
//1. Theming -dark/light mode feature
//2. User Authentication - many components need to know if the user is logged in or not
//Routing
//Managing state - When your app begins to get complex

//1. create the context in a separate file
//2. Provide the context to the components
//3. Use the context

const UseContextAPI = () => {
  const [users, setUsers] = useState(userData);

  const deleteUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };
  return (
    <UserContext.Provider value={{ users, deleteUser }}>
      <div className="--flex-center">
        <div className="--width-500px --my --p">
          <h2>Use Context API (than prop drilling)</h2>
          <UserList />
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default UseContextAPI;
