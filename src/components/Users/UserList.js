import React from 'react'
import UserItem from './UserItem'

const UserList = (props) => {

  if (props.items.length == 0) {
    return <div>No users</div>
  }

  return (
    <div>
      {props.items.map(u => (
        <UserItem name={u.name} age={u.age}/>)
      )}
    </div>
  )
}

export default UserList;