import React, {useState} from "react";
import {Checkbox, Input} from "antd";

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
}

const TodoItem = ({ task }) => {
  const { description } = task;
  const [inputValue, setInputVaule] = useState(description);

  return (
    <div className='todo-item'>
      <Checkbox onChange={onChange} />

      <Input
        placeholder="Basic usage"
        value={inputValue}
        onChange={(e) => setInputVaule(e.target.value)}
      />
    </div>
  )
};

export default TodoItem;
