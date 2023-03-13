import React from "react";
import { FaCheckDouble, FaEdit, FaTrashAlt } from "react-icons/fa";
import "./TaskManager.css";

const Task = ({
  id,
  name,
  date,
  completed,
  editTask,
  deleteTask,
  completeTask,
}) => {
  return (
    <div key={id} className={completed ? "task complete" : "task"}>
      <span>
        <p>
          <b>Task:</b>
          {name}
        </p>
        <p>
          <b>Date:</b>
          {date}
        </p>
      </span>
      <span>
        <button style={{ color: "green" }}>
          <FaEdit onClick={() => editTask(id)} />
        </button>
        <button style={{ color: "red" }}>
          <FaTrashAlt onClick={() => deleteTask(id)} />
        </button>
        <button style={{ color: "purple" }}>
          <FaCheckDouble onClick={() => completeTask(id)} />
        </button>
      </span>
    </div>
  );
};

export default Task;
