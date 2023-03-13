import React, { useState } from "react";
import { peopleData } from "../../../pages/hooks/people-data";
import { BiTrash } from "react-icons/bi";

const UseStateArray = () => {
  const [people, setPeople] = useState(peopleData);

  const removePerson = (id) => {
    //getting the remaining people
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <section className="--flex-center --100vh --bg-primary">
      <div className="container">
        <h1 className="--color-white">Use state in Array</h1>
        {people.map((person) => {
          const { id, name } = person;
          return (
            <div className="--flex-between --bg-light --my --card" key={id}>
              <h3>{name}</h3>
              <BiTrash color="red" size={22} onClick={() => removePerson(id)} />
            </div>
          );
        })}
        <button className="--btn --btn-danger" onClick={() => setPeople([])}>
          Clear all
        </button>
      </div>
    </section>
  );
};

export default UseStateArray;
