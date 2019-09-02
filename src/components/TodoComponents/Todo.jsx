import React from 'react'

function Todo(props){

	return(
		<div 
			className={`todo${props.todo.complete ? " complete":""}`}
			onClick={() => null}
		>
			<h2>{props.todo.name}</h2>
		</div>	
	)
	
}

export default Todo;