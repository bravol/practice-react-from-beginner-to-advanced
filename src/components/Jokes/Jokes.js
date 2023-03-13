import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import spinner from "./assets/spinner1.jpg";

const Jokes = () => {
  const [joke, setJoke] = useState({});
  //is is advisable to use isLoading on fetching data coz it takes some time to fetch it
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://api.chucknorris.io/jokes/random";

  const generateJoke = () => {
    // fetching data from url using fetch.then function  also it is use full to use try catch to catch errors since you are fetching data from API or url
    setIsLoading(true);
    try {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // console.log(data);
          setJoke(data);
          setIsLoading(false);
        });
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    generateJoke();
  }, []);

  return (
    <section className="--flex-center --100vh --bg-primary">
      <div className="container --card --bg-light --p">
        <h2>Random Jokes Generator</h2>
        <div className="--line"></div>
        {isLoading ? (
          <>
            <div className="--center-all">
              <img src={spinner} alt="Loading ..." width={100} />
            </div>
          </>
        ) : (
          <>
            <h4>Joke id: {joke.id}</h4>
            <p>{joke.value}</p>
          </>
        )}

        <br />
        <button className="--btn --btn-primary" onClick={generateJoke}>
          Generate Joke
        </button>
      </div>
    </section>
  );
};

export default Jokes;
