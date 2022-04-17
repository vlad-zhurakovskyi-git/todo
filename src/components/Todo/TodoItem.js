import React, {useState} from "react";
import { Checkbox, Input, Button, Radio } from "antd";
import { CloseCircleOutlined } from '@ant-design/icons';

const TodoItem = ({ task }) => {
  const { description, isCompleted, id } = task;
  const [inputValue, setInputValue] = useState(description);
  const [isChecked, setChecked] = useState(isCompleted);

  const onChange = (e) => {
    setChecked(!isChecked);
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className='todo-item'>
      <Checkbox checked={isChecked} onChange={onChange} />

      <Input
        placeholder="Basic usage"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <Button type="link" danger>
        <CloseCircleOutlined />
      </Button>
    </div>
  )
};

export default TodoItem;
