import { ADD_TASK, DELETE_TASK } from "../actions/actionTypes";

const tasksList = [
  {
    "isCompleted": false,
    "id": "6259b999d8af83001737933c",
    "description": "task 1",
  },
  {
    "isCompleted": true,
    "id": "6259b9c5d8af83001737933f",
    "description": "task 2",
  },
  {
    "isCompleted": false,
    "id": "6259b9cdd8af830017379341",
    "description": "task 3",
  }
];

const tasks = (state = tasksList, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        action.payload,
        ...state,
      ];

    case DELETE_TASK:
      return [...state].filter((task) => task.id !== action.payload.id);

    default:
      return state;
  }
};

export default tasks;
