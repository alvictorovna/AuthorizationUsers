import React from 'react'
import UserList from '../components/UserList'

//import { Link } from 'react-router-dom'

export default function Profile() {

  function logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/login`)
  }

    

  return (
    <React.Fragment>
      <UserList/>
    </React.Fragment>
  )
}

