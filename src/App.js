import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import UserInput from './components/Users/UserInput';
import UserList from './components/Users/UserList';

function App() {

  const [usersList, setUsersList] = useState([
    { name: 'Amy Tan', age: 9 }
  ]);

  const AddUsertoApp = (enteredName, enteredAge) => {
    setUsersList(prevUsers => {
      const newUsersList = [...prevUsers];
      newUsersList.unshift({ name: enteredName, age: enteredAge });
      return newUsersList;
    })
  }

  return (
    <div>
      <div className="App">
        <div><UserInput onNewUser={AddUsertoApp} /></div>
      </div>

      <div>
        <UserList items={usersList} />
      </div>
    </div>
  );
}

export default App;
