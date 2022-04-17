import React, {useState} from "react";
import { Checkbox, Input, Button } from "antd";
import { CloseCircleOutlined } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/actions/actions";

const TodoItem = ({ task }) => {
  const { description, isCompleted, id } = task;
  const [inputValue, setInputValue] = useState(description);
  const [isChecked, setChecked] = useState(isCompleted);

  const dispatch = useDispatch();

  const onChange = (e) => {
    setChecked(!isChecked);
    console.log(`checked = ${e.target.checked}`);
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(id));
  };

  return (
    <div className='todo-item'>
      <Checkbox checked={isChecked} onChange={onChange} />

      <Input
        placeholder="Basic usage"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <Button onClick={handleDeleteTask} type="link" danger>
        <CloseCircleOutlined />
      </Button>
    </div>
  )
};

export default TodoItem;
