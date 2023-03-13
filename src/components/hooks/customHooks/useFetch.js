import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // it is advisable to use isLoading when you are fetching data from api,database, url et.c with error function eg try catch block
  const [error, setError] = useState(false);

  //last time in Jokes, we used fetch.then to fetch data now we gonna use await fetch to get data from url. which is shorter than fetch.then function
  const getUsers = async () => {
    //pass the argument url
    setIsLoading(true);
    setError(false);
    try {
      const response = await fetch(url);
      //   console.log(response);
      if (!response.ok) {
        throw new Error("Something went wrong.");
      }
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      //   console.log(error.message);
      setError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, [url]);

  return { data, error, isLoading }; // these are things that receiving component is gonna use or the component that is going to use this custom hook
};

export default useFetch;
