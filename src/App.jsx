import React from 'react';
import TodoList from "./components/Todo/TodoList";
import TodoAddTask from "./components/Todo/TodoAddTask";

const App = () => {
  return (
    <div className='todo'>
      <div className="container">
        <TodoAddTask/>

        <TodoList />
      </div>
    </div>
  );
};

export default App;
