import React from 'react';
import ReactDOM from 'react-dom'
import "./components/Todo.css"
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'


const toDo = [
  {
    name: "Call Discover",
    id: 1,
    completed: false
  },
  {
    name: "Contact Building",
    id: 2,
    completed: false
  },
  {
    name: "Order Replacement Champagne",
    id: 3,
    completed: false
  },
  {
    name: "Organize Pocketbook",
    id: 4,
    completed: false
  }
]
class App extends React.Component {
  constructor(){
    super();

    this.state = {
      toDo:toDo
    }
  }

  toggleTask = id => {
    this.setState({
      toDo: this.state.toDo.map(task =>{
        if (task.id === id){
          return{
            ...task,
            completed: !task.completed
          }
        }
        else{
          return task;
        }
      })
    });
  };
  clearAccomplished = e => {
    e.preventDefault();
    this.setState({
      toDo: this.state.toDo.filter(task => task.completed === false)
    })
  }
  addTask = taskName => {
    const newTask ={
      name: taskName,
      id: Date.now(),
      completed: false
    };

    this.setState({
      toDo: [...this.state.toDo, newTask]
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="Header">
          <h2>Welcome to your Todo App!</h2>
          <h2 onClick={() => this.setState({})}>To Do List</h2>
          <TodoForm addTask={this.addTask}/>
        </div>
        <TodoList
          toggleTask={this.toggleTask}
          toDos={this.state.toDo}
          clearAccomplished={this.clearAccomplished}
        />
      </div>
    );
  }
}

export default App;
