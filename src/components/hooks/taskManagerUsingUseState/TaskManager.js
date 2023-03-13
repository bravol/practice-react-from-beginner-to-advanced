import React, { useEffect, useRef, useState } from "react";
import useLocalStorage from "use-local-storage";
import Task from "./Task";
import "./TaskManager.css";

const TaskManager = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  // const [tasks, setTasks] = useState([]);
  //saving the information in local storage
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  //editing task
  const [taskID, setTaskID] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  //setting focus
  const nameInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name & !date || !name || !date) {
      alert("Please enter task name or date");
    } else if (name && date && isEditing) {
      setTasks(
        tasks.map((task) => {
          if (task.id === taskID) {
            return { ...task, name, date, completed: false };
          }
          return task;
        })
      );
      setName("");
      setDate("");
      setIsEditing(false);
      setTaskID(null);
    } else {
      //creating the object which will catch the input
      const newTask = {
        id: Date.now(),
        name: name,
        date: date,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setName("");
      setDate("");
    }
  };

  // I want the name input to be automatically focused whenever the page loads
  useEffect(() => {
    nameInputRef.current.focus();
  });

  const editTask = (id) => {
    // console.log(id);
    //this takes information from the form and push it back to form in-order to be edited
    const thisTask = tasks.find((task) => task.id === id);
    setIsEditing(true);
    setTaskID(id);

    setName(thisTask.name);
    setDate(thisTask.date);
  };

  const deleteTask = (id) => {
    // console.log(id);
    if (window.confirm("Are you sure you want to delete")) {
      const newTasks = tasks.filter((task) => task.id !== id);
      setTasks(newTasks);
    }
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        }
        return task;
      })
    );
  };

  return (
    <div className="--bg-primary">
      <h1 className="--text-center --text-light">Task Manager</h1>
      <div className="--flex-center --p">
        <div className="--card --bg-light --width-500px --p --flex-center">
          <form className="form --form-control" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Task:</label>
              <input
                ref={nameInputRef}
                type="text"
                placeholder="Task Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                placeholder="Task Date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <button className="--btn --btn-success --btn-block">
              {isEditing ? "Edit Task" : "Save Task"}
            </button>
          </form>
        </div>
      </div>
      {/* Display Task */}
      <article className="--flex-center --my2">
        <div className="--width-500px --p">
          <h2 className=" --text-light">Task List</h2>
          <hr style={{ background: "#fff" }} />
          {tasks.length === 0 ? (
            <p className="--text-light">No Task at the moment</p>
          ) : (
            <>
              {tasks.map((task, id) => {
                return (
                  <Task
                    key={id}
                    {...task}
                    editTask={editTask}
                    deleteTask={deleteTask}
                    completeTask={completeTask}
                  />
                );
              })}
            </>
          )}
        </div>
      </article>
    </div>
  );
};

export default TaskManager;
