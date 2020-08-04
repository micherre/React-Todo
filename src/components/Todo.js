import React from 'react'

const Todo = props => {
  return (
    <div
      onClick={() => props.toggleTask(props.task.id)}
      className={`task${props.task.completed ? "accomplished" : ""}`}
    >
      <p>{props.task.name}</p>
    </div>
  );
};

export default Todo;