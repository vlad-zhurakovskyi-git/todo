import React, {useState} from "react";
import uniqid from 'uniqid';
import { Input, Alert } from "antd";
import { addTask } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";

const TodoAddTask = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [alert, setAlert] = useState('');

  const handleAddTask = ({ key }) => {
    if (inputValue.length > 3 && key === 'Enter') {
      dispatch(addTask(uniqid(), inputValue, false));

      return setInputValue('');
    }

    if (inputValue.length < 3 && key === 'Enter') {
      setAlert(true);

      return setTimeout(() => {
        setAlert(false)
      }, 2000);
    }
  };

  return (
    <div className='todo-add'>
      {alert && <Alert className='todo-add__alert' message="Enter > 3 symbols" type="error" />}

      <Input
        className='todo-input'
        placeholder="Enter task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleAddTask}
      />
    </div>
  )
};

export default TodoAddTask;
