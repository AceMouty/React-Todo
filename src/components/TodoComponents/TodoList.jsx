// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

import Todo from './Todo';

function TodoList(props){
	return(
		<div className="todo-container">
			<button onClick={props.deleteCompleted}>
				Clear Completed
			</button>
			{props.todos.map(todo => {
				return <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo}/>
			})}
		</div>
	)
}

export default TodoList;