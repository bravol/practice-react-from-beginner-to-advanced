import { useReducer } from "react";
import { countReducer } from "./countReducer";
//it works same as useState hook but more advanced than useState
// it is used in complex projects/apps where you have many renders/ functions etc.

//dispatch - replaces setCount() and tells the reducer function what to do
//payload - sends some information to the reducer function
const initialState = {
  count: 0,
};

const Counter = () => {
  const [state, dispatch] = useReducer(countReducer, initialState);

  const handleSubtract = () => {
    const id = "12345";
    dispatch({
      //every thing here is action. action has a type and A payLoad property
      type: "SUBTRACT",
      payload: { id }, //passing some information to reducer function at the top
    });
  };
  const handleReset = () => {
    dispatch({
      type: "RESET",
      payload: "",
    });
  };
  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: "",
    });
  };

  return (
    <section className="--flex-center --100vh --bg-primary">
      <div className="container --bg-light --p2 --m2 --center-all">
        <h3>React Counter App</h3>
        <h1 style={{ color: "black" }}>{state.count}</h1>
        <div className="buttons --flex-center">
          <button
            className="subtract --btn --btn-danger"
            onClick={handleSubtract}
          >
            Subtract
          </button>
          <button className="reset --btn" onClick={handleReset}>
            Reset
          </button>
          <button className="add --btn --btn-primary" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
    </section>
  );
};
export default Counter;
