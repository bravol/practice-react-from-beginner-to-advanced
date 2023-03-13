//How to catch the errors in the project without first looking in console
// this is powerful
import React, { useEffect, useState } from "react";

const GithubUsers = () => {
  const url = "https://api.github.com/users";

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // it is advisable to use isLoading when you are fetching data from api,database, url et.c with error function eg try catch block
  const [error, setError] = useState(false);

  //last time in Jokes, we used fetch.then to fetch data now we gonna use await fetch to get data from url. which is shorter than fetch.then function
  const getUsers = async () => {
    setIsLoading(true);
    setError(false);
    try {
      const response = await fetch(url);
      //   console.log(response);
      if (!response.ok) {
        throw new Error("Something went wrong.");
      }
      const data = await response.json();
      setUsers(data);
      setIsLoading(false);
    } catch (error) {
      //   console.log(error.message);
      setError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

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
            users.map((user) => {
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
