import React from "react";
import { Spin } from "antd";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import TodoAddTask from "./TodoAddTask";

const TodoList = () => {
  const tasks = useSelector((state) => state.tasks);

  if (!tasks.length) return <Spin />;

  return (
    <div className='todo-list'>
      <TodoAddTask/>

      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </div>
  )
};

export default TodoList;
