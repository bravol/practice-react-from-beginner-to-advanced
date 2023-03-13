import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  const handleSubtract = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  const handleAdd = () => {
    // setCount((c) => c + 1); //Updater function
    setCount(count + 1);
  };

  let color = "#444";
  if (count >= 1) {
    color = "blue";
  } else if (count < 0) {
    color = "red";
  } else {
    color = "#444";
  }

  return (
    <section className="--flex-center --100vh --bg-primary">
      <div className="container --bg-light --p2 --m2 --center-all">
        <h3>React Counter App</h3>
        <h1 style={{ color: color }}>{count}</h1>
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
