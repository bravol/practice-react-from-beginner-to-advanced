import React, { useEffect, useReducer, useRef, useState } from "react";

import Alert from "../alert/Alert";
import Confirm from "../confirm/Confirm";
import Task from "./Task";
import "./TaskManager.css";
import { taskReducer } from "./taskReducer";

const TaskManagerReducer = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const initialState = {
    tasks: localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : [],
    taskID: null,
    isEditing: false,
    isAlertOpen: false,
    alertContent: "This is an alert",
    alertClass: "danger",
    isEditModalOpen: false,
    isDeleteModalOpen: false,
    modalTitle: "Delete Task",
    modalMsg: "Are you sure you want to delete",
    modalActionText: "OK",
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  //setting focus
  const nameInputRef = useRef(null);

  const closeAlert = () => {
    dispatch({
      type: "CLOSE_ALERT",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !date) {
      dispatch({
        type: "EMPTY_FIELD",
      });
    }

    //updating/editing the task
    if (name && date && state.isEditing) {
      const updatedTask = {
        id: state.taskID,
        name,
        date,
        completed: false,
      };
      dispatch({
        type: "UPDATE_TASK",
        payload: updatedTask,
      });
      setName("");
      setDate("");
      return; //this return stops the code at this point in vanilla javascript
    }

    // adding the task to list
    if (name && date) {
      const newTask = {
        id: Date.now(),
        name,
        date,
        completed: false,
      };
      dispatch({
        type: "ADD_TASK",
        payload: newTask,
      });
      setName("");
      setDate("");
    }
  };

  // I want the name input to be automatically focused whenever the page loads
  useEffect(() => {
    nameInputRef.current.focus();
  });

  const openEditModal = (id) => {
    dispatch({
      type: "OPEN_Edit_MODAL",
      payload: id,
    });
  };
  const editTask = () => {
    const id = state.taskID; // it is the same id with that of openEditModal
    dispatch({
      type: "EDIT_TASK",
      payload: id,
    });

    const thisTask = state.tasks.find((task) => task.id === id);
    //console.log(thisTask)
    setName(thisTask.name);
    setDate(thisTask.date);
    closeModal();
    // console.log(state.isEditing);
  };

  const openDeleteModal = (id) => {
    dispatch({
      type: "OPEN_DELETE_MODAL",
      payload: id,
    });
  };

  const deleteTask = () => {
    const id = state.taskID;
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  };

  const completeTask = (id) => {
    dispatch({
      type: "COMPLETE_TASK",
      payload: id,
    });
  };

  const closeModal = () => {
    dispatch({
      type: "CLOSE_MODAL",
    });
  };

  return (
    <div className="--bg-primary">
      {state.isAlertOpen && (
        <Alert
          onCloseAlert={closeAlert}
          alertClass={state.alertClass}
          alertContent={state.alertContent}
        />
      )}

      {state.isEditModalOpen && (
        <Confirm
          modalTitle={state.modalTitle}
          modalMsg={state.modalMsg}
          modalActionText={state.modalActionText}
          modalAction={editTask}
          onCloseModal={closeModal}
        />
      )}

      {state.isDeleteModalOpen && (
        <Confirm
          modalTitle={state.modalTitle}
          modalMsg={state.modalMsg}
          modalActionText={state.modalActionText}
          modalAction={deleteTask}
          onCloseModal={closeModal}
        />
      )}

      <h1 className="--text-center --text-light">Task Manager Reducer</h1>
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
              {state.isEditing ? "Edit Task" : "Save Task"}
            </button>
          </form>
        </div>
      </div>
      {/* Display Task */}
      <article className="--flex-center --my2">
        <div className="--width-500px --p">
          <h2 className=" --text-light">Task List</h2>
          <hr style={{ background: "#fff" }} />
          {state.tasks.length === 0 ? (
            <p className="--text-light">No Task at the moment</p>
          ) : (
            <>
              {state.tasks.map((task, id) => {
                return (
                  <Task
                    key={id}
                    {...task}
                    editTask={openEditModal}
                    deleteTask={openDeleteModal}
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

export default TaskManagerReducer;
