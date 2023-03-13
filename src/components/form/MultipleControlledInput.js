import React from "react";
import { useState } from "react";

const initialState = {
  name: "",
  job: "",
  company: "",
  address: "",
  shipping: "",
  billing: "",
};

const MultipleControlledInput = () => {
  const [user, setUser] = useState(initialState);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = user;
    console.log(newUser);
    setUser(initialState);
  };
  return (
    <div className="--bg-primary --mh-100vh">
      <h1 className="--text-light --text-center">Multiple Controlled Inputs</h1>
      <div className="--flex-center">
        <div className="--card --bg-light --width-500px  --flex-center">
          <form onSubmit={handleSubmit} className="--form-control">
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="job">Job:</label>
              <input
                type="text"
                name="job"
                value={user.job}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="job">Company:</label>
              <input
                type="text"
                name="company"
                value={user.company}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="job" name="job">
                Address:
              </label>
              <input
                type="text"
                name="address"
                value={user.address}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="job" name="job">
                Shipping:
              </label>
              <input
                type="text"
                name="shipping"
                value={user.shipping}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="job" name="job">
                Billing:
              </label>
              <input
                type="text"
                name="billing"
                value={user.billing}
                onChange={handleChange}
              />
            </div>
            <button className="--btn --btn-block">Submit User</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MultipleControlledInput;
