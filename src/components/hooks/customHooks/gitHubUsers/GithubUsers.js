//How to catch the errors in the project without first looking in console
// this is powerful
import { useEffect, useState } from "react";

import useFetch from "../useFetch";

const url = "https://api.github.com/users";

const GithubUsers = () => {
  //this is how we can use custom hook
  const { data, error, isLoading } = useFetch(url);
  return (
    <div className="--bg-primary --py2">
      <div className="container">
        <header>
          <h1 className="--text-center --text-light">Github Users</h1>
          <div className="--line"></div>
        </header>

        {isLoading && (
          <>
            <div className="--center-all --p">
              <h4 className="--text-light">Loading...</h4>
            </div>
          </>
        )}
        <div className="--grid-25 --py">
          {error ? (
            <>
              <h4 className="--text-light">Something went wrong</h4>
            </>
          ) : (
            data.map((user) => {
              //destructuring the data
              const { id, login, avatar_url, html_url } = user;
              return (
                <div key={id} className="--card --bg-light --p --flex-start ">
                  <img
                    src={avatar_url}
                    alt={""}
                    className="--profile-img --mx"
                  />
                  <span>
                    <h4 className="">{login}</h4>
                    <a href={html_url}>View Profile</a>
                  </span>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default GithubUsers;
