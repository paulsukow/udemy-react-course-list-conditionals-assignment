import React from 'react';


const validationComponent = (props) => {
	let validationMsg = null

	if (props.textLength < 5) {
		validationMsg = "Text too short"
	}

	return (
		<div>
			<p> {validationMsg} </p>
		</div>
	)
};

export default validationComponent