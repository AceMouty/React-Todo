import React from 'react';

// Import Components
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoList = [{
	name:"Walk Dog",
	id: Date.now(),
	complete: false
}]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	
	// Starting List of todo's
	constructor(){
		super()
		this.state = {
			todos: todoList
		}
	}

	// Add a todo
	addTodo = todoName => {
		// Build out the new todo object
		const newTodo = {
			name: todoName,
			id: Date.now(),
			complete: false
		}
		// Create a new array and add the NEW todo to the list with the old ones as well
		this.setState({todos: [...this.state.todos, newTodo]})
	}
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
				<TodoForm addTodo={this.addTodo}/>
				<button>Clear Completed</button>
				<TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
