import { ADD_TASK, DELETE_TASK } from "./actionTypes";

export const addTask = (id, description, isCompleted) => ({
  type: ADD_TASK,
  payload: {
    id,
    description,
    isCompleted
  }
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: {
    id
  }
});
