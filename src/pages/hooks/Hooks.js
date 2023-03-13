import React from "react";
import Counter from "../../components/hooks/useStateHook/Counter";
import UseStateArray from "../../components/hooks/useStateHook/UseStateArray";
import UseStateObjects from "../../components/hooks/useStateHook/UseStateObjects";
// import UseState from "../../components/hooks/UseState";

const Hooks = () => {
  return (
    <div>
      {/* <UseState /> */}
      {/* <Counter /> */}
      {/* <UseStateArray /> */}
      <UseStateObjects />
    </div>
  );
};

export default Hooks;
