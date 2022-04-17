import React from 'react';
import TodoList from "./components/Todo/TodoList";

const App = () => {
  return (
    <div className='todo'>
      <div className="container">
        <TodoList />
      </div>
    </div>
  );
};

export default App;
