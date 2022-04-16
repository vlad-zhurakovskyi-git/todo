import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Button, Spin } from 'antd';
import { ADD, SUB } from "./redux/types";
import { login, getAllTasks } from './requests/auth';
import { addTask } from './requests/tasks';

const App = () => {
  const [token, setToken] = useState('');
  const [tasks, setTasks] = useState([]);

  const dispatch = useDispatch();
  const counters = useSelector((state) => state.counter);

  useEffect(() => {
    login().then((user) => {
      setToken(user.token);

      getAllTasks(user.token).then(tasksData => setTasks(tasksData.data));
    });
  }, []);

  const addTaskFn = (disabled = true) => {
    if (disabled) return;

    addTask(token, {
      description: 'task 3'
    });
  };

  if (!tasks.length) return <Spin />;

  return (
    <div className='container'>
      <div>{counters.counter}</div>
      <Button onClick={() => dispatch({ type: ADD })}>add +1</Button>
      <Button onClick={() => dispatch({ type: SUB })}>sub -1</Button>

      {tasks.map(({ description, _id }) => <div key={_id}>{description}</div>)}

      <Button onClick={addTaskFn}>add task</Button>
    </div>
  );
};

export default App;
