import React, {useState} from "react";
import uniqid from 'uniqid';
import { Input } from "antd";
import { addTask } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";

const TodoAddTask = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = ({ key }) => {
    if (inputValue.length > 3 && key === 'Enter') {
      dispatch(addTask(uniqid(), inputValue, false));

      setInputValue('');
    }
  };

  return (
    <Input
      className='todo-input'
      placeholder="Enter task"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyPress={handleAddTask}
    />
  )
};

export default TodoAddTask;
