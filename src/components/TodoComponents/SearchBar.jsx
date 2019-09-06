import React, { useState } from 'react';

function SearchBar({filterTodos}) {
	const [searchString, setSearchString] = useState("")

	  function changeHandler (e){
		 	console.log(e.target.value.length)
		 	setSearchString(e.target.value)
			filterTodos(searchString)
	 } 

	return(
		<div>
			<input 
				type="text"
				value={searchString}
				onChange={event => changeHandler(event)}
				/>
		</div>
	)
}

export default SearchBar;