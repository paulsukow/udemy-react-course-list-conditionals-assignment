import React from 'react';

const userInput = (props) => {
	return (
		<div>
			<input type="text" 
			onChange = {props.changed} 
			value = {props.text}
			/>
			<p> {props.text.length} </p>
		</div>
	)
};

export default userInput