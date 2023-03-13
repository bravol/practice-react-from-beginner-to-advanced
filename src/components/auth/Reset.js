import React from "react";
// import { Link } from "react-router-dom";

import resetImg from "./assets/forgot.svg";
import "./AuthContainer.scss";
import { AiOutlineClose } from "react-icons/ai";

const Register = ({ onLogin }) => {
  return (
    <div className="main-container --flex-center">
      <div className="form-container reset">
        <form className="--form-control">
          <h2 className="--color-danger --text-center">Reset</h2>

          <input type="email" className="--width-100" placeholder="Email" />

          <button className="--btn --btn-primary --btn-block">
            Reset Password
          </button>

          <span className="--btn  --block --text-center">
            We will send you a reset link !!!
          </span>
          <div className="close">
            <AiOutlineClose color="red" onClick={onLogin} />
          </div>
        </form>
      </div>
      <div className="img-container">
        <img src={resetImg} alt={"Hello"} />
      </div>
    </div>
  );
};

export default Register;
