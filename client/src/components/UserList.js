import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserItem from '../components/UserItem';
import ToolBar from '../components/ToolBar';


export default function Profile() {

  let [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(users => {
        setUsers(users.data)
        console.log(users.data)
        })
  }, [])

  function toggleTodo(id) {
    setUsers(
      users.map(user => {
        if (user.id === id) {
          user.сompleted = !user.сompleted;
        } 
        return user
      })
    )
  }

  
  return (
    <React.Fragment>
      <ToolBar users={users}/>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Date register</th>
            <th scope="col">Date login</th>
            <th scope="col">Status</th>
            <th scope="col">Select all / deselect all</th>
          </tr>
        </thead>
        <tbody>
            { users.map((user, index) => {
              return <UserItem user={user} key={user.id} index={index} onChange={toggleTodo}/>
            })}
        </tbody>
      </table>
    </React.Fragment>
  )
}