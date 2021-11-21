import React, {useState} from 'react'

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
    <form onSubmit={ formSubmitHandler }>			
			<div>
				<label>Username</label>
				<input type="text" name="name" value={enteredName} onChange={onChangeNameHandler} />
			</div>
			<div>
				<label>Age (Years)</label>
				<input type="text" name="age" value={enteredAge} onChange={onChangeAgeHandler}/>
			</div>
			<div>
      	<button type="submit">Add User</button>
			</div>
		</form>
	)
}

export default UserInput;
