import React, { useState } from 'react'
import './UserInput.css';

const UserInput = (props) => {
	const [enteredName, setEnteredName] = useState();
	const [enteredAge, setEnteredAge] = useState();

	const onChangeNameHandler = (event) => {
		setEnteredName(event.target.value);
	}

	const onChangeAgeHandler = (event) => {
		setEnteredAge(event.target.value);
	}

	const formSubmitHandler = (event) => {
		event.preventDefault();
		props.onNewUser(enteredName, enteredAge);
		setEnteredName("");
		setEnteredAge("");
	}

	return (
		<form onSubmit={formSubmitHandler}>
			<div>
				<label>Username
				<input type="text" name="name" value={enteredName} onChange={onChangeNameHandler} />
        </label>
			</div>
			<div>
				<label>Age (Years)
				<input type="text" name="age" value={enteredAge} onChange={onChangeAgeHandler} />
        </label>
			</div>
			<div>
				<button type="submit">Add User</button>
			</div>
		</form>
	)
}

export default UserInput;
