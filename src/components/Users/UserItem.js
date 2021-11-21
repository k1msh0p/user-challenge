import React from 'react';

const UserItem = (props) => {
	return (
		<li>
				{props.name}
				{props.age}
		</li>
	)
}

export default UserItem;