import React, { useEffect, useState } from 'react';
import { login, getAllTasks } from './requests/auth';
import { addTask } from './requests/tasks';
import { Button } from 'antd';
import 'antd/dist/antd.css';

const App = () => {
  const [token, setToken] = useState('');
  const [tasks, setTasks] = useState([]);

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

  if (!tasks.length) return <div>ожидаем загрузку</div>;

  return (
    <div style={{ width: 800, margin: '0 auto' }}>
      {tasks.map(({ description, id }) => <div key={id}>{description}</div>)}

      <Button onClick={addTaskFn}>add task</Button>
    </div>
  );
};

export default App;
