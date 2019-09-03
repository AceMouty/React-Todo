import React from 'react'

class TodoForm extends React.Component {

	constructor() {
		super()
		this.state = {
			item: ""
		}
	}

	// Watch for changes and update state
	changeHandler = event => {
		this.setState({[event.target.name]: event.target.value})
	}

	// Create new todo and clear out the form
	submitHandler = event => {
		event.preventDefault()
		this.props.addTodo(this.state.item)
		this.setState({item: ""})
	}

	render(){
		return(
			<form onSubmit={this.submitHandler}>
				<input 
					type="text" 
					placeholder="Todo.." 
					name="item"
					value={this.state.item}
					onChange={this.changeHandler}
					/>
				<button>Submit</button>
			</form>
		)
	}
}

export default TodoForm;