import React, { useState } from "react";

// const initialProfile = {

//   name: "Lumala Brian",
//   job: "Web Dev",
//   company: "Google",
// };

const UseStateObjects = () => {
  const [profile, setProfile] = useState({
    name: "Lumala Brian",
    job: "Web Dev",
    company: "Google",
  });

  const updateCompany = () => {
    setProfile({ ...profile, company: "Microsoft" });
  };
  return (
    <>
      <h2 className="--text-center --my2">useState in objects</h2>
      <div className="--card mx2">
        <h2>Name: {profile.name} </h2>
        <h4>Job: {profile.job} </h4>
        <h4>Company: {profile.company} </h4>
      </div>
      <div className="--center-all -my2">
        <button className="--btn --btn-primary" onClick={updateCompany}>
          Change Company
        </button>
      </div>
    </>
  );
};

export default UseStateObjects;
