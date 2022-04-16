import { ADD_TASK } from "./actionTypes";

export const addTask = (id, description, isCompleted) => ({
  type: ADD_TASK,
  id,
  description,
  isCompleted
});
