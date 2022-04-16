import { ADD_TASK } from "../actions/actionTypes";

const tasksList = [
  {
    "completed": false,
    "id": "6259b999d8af83001737933c",
    "description": "task 1",
  },
  {
    "completed": false,
    "id": "6259b9c5d8af83001737933f",
    "description": "task 2",
  },
  {
    "completed": false,
    "id": "6259b9cdd8af830017379341",
    "description": "task 3",
  }
];

const tasks = (state = tasksList, { type, id, description, isCompleted }) => {
  switch (type) {
    case ADD_TASK:
      return [
        {
          id,
          description,
          isCompleted
        },
        ...state,
      ];

    default:
      return state;
  }
};

export default tasks;
