import React from "react";
import { Spin } from "antd";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import TodoAddTask from "./TodoAddTask";

const TodoList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className='todo-list'>
      {!tasks.length && <Spin/>}

      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
        />
      ))}
    </div>
  )
};

export default TodoList;
