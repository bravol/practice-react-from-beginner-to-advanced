import React, { useState } from "react";

const Conditionals = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  let message;
  if (isLoggedIn) {
    message = "Welcome, Brian";
  } else {
    message = "Welcome, Guest";
  }

  return (
    <div>
      <h1 className="--text-center --p2 " style={{ color: "black" }}>
        {message}
      </h1>
    </div>
  );
};

export default Conditionals;
