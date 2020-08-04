// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

const TodoList = props => {

  return(
    <div className="todo-List">
      {props.toDos.map(task => (
        <Todo key={task.id} task={task} toggleTask={props.toggleTask} />
      ))}
      <button className="clear-btn" onClick={props.clearAccomplished}>
        Clear Accomplished
      </button>
    </div>
  );
};

export default TodoList;