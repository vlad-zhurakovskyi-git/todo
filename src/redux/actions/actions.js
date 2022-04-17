import { ADD_TASK, DELETE_TASK, TOGGLE_COMPLETED_TASK } from "./actionTypes";

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

export const isCompletedTask = (id) => ({
  type: TOGGLE_COMPLETED_TASK,
  payload: {
    id
  }
});
