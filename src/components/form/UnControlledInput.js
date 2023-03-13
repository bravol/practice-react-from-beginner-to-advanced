import React, { useRef, useEffect } from "react";

//useRef
//Target DOM nodes/elements
//Preserve values during re-render

const UnControlledInput = () => {
  const nameInputRef = useRef(null);
  const jobInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredJob = jobInputRef.current.value;
    console.log(enteredName, enteredJob);
  };
  //   console.log(nameInputRef, jobInputRef);

  //adding autofocus using useRef and useEffect
  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  return (
    <div className="--bg-primary --mh-100vh">
      <h1 className="--text-light --text-center">Un Controlled Inputs</h1>
      <div className="--flex-center">
        <div className="--card --bg-light --width-500px  --flex-center">
          <form onSubmit={handleSubmit} className="--form-control">
            <div>
              <label htmlFor="name" name="name">
                Name:
              </label>
              <input type="text" ref={nameInputRef} />
            </div>
            <div>
              <label htmlFor="job" name="job">
                Job:
              </label>
              <input type="text" ref={jobInputRef} />
            </div>
            <button className="--btn --btn-block">Submit User</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UnControlledInput;
