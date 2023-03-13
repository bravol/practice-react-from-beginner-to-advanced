//3. Use the context
import { useContext } from "react";
import UserContext from "./userContext";

const User = ({ id, name }) => {
  //how to use useContext
  const { deleteUser } = useContext(UserContext); // it needs an argument which you created, this how you access the value that is passed in your context
  // console.log(data);
  return (
    <div className="--flex-between">
      <h3 className="--text-light">{name}</h3>
      <button className="--btn --btn-danger" onClick={() => deleteUser(id)}>
        Delete
      </button>
    </div>
  );
};

export default User;
