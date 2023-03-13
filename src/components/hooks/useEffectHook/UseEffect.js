import React, { useEffect, useState } from "react";

// On every re-render
// On initial render
// On when a state or prop changes

const UseEffect = () => {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     console.log("UseState triggered every time");
  //   });

  useEffect(() => {
    console.log(`UseState triggered  ${count} times`);
  }, [count]);

  return (
    <div className="--center-all">
      <h1 style={{ color: "black" }}>{count}</h1>
      <button
        className="--btn --btn-primary"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default UseEffect;
