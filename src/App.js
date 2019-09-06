import React from 'react';

// Import Components
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import SearchBar from './components/TodoComponents/SearchBar';

// Importing Styles
import './styles.css'

const todoList = [{
	name:"First Todo",
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
			// Check to see if there is data in local storage and load it, if not then assign todoList to 'todos' state
			todos: window.localStorage.getItem('storedTodo') ? JSON.parse(window.localStorage.getItem('storedTodo')) : todoList,
			filteredTodos: []
		}
	}

	// Adding Current todo list to local storage.
	componentDidUpdate(prevState) {
		window.localStorage.setItem('storedTodo', JSON.stringify(this.state.todos));
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

	// Edit state so that it can be deleted
	toggleTodo = id => {
		console.log(id)

		// Update the complete status on todo
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id){
					return {...todo, complete: !todo.complete}
				}
				else {
					return todo;
				}
			})
		})
	}

	// Delete a todo
	delteCompleted = () => {
		this.setState({
			todos: this.state.todos.filter(todo => !todo.complete)
		});
	}

	filterTodos = (searchValue) => {
		if(searchValue.length <= 0) {
			console.log("WE FIRED WHEN SEARCH IS EMPTY")
			this.setState({...this.state, filteredTodos: []});
			
		}
		this.setState({
			filteredTodos: this.state.todos.filter(todo => {
				 return todo.name.toLowerCase().includes(searchValue.toLowerCase())
			})
		})
	}

  render() {
    return (
      <div className="app-container">
				<div className="app">
					<h2>Welcome to your Todo App!</h2>
					<TodoForm addTodo={this.addTodo}/>
					<SearchBar 
						filterTodos={this.filterTodos}
					/>
					<TodoList 
						todos={this.state.filteredTodos.length > 0 ? this.state.filteredTodos: this.state.todos} 
						deleteCompleted={this.delteCompleted}
						toggleTodo={this.toggleTodo}
					/>
				</div>
      </div>
    );
  }
}

export default App;
