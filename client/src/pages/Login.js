import React, { Component } from 'react';
import axios from 'axios';

export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleSubmit(event) {
      const {
          email, 
          password
      } = this.state;
      axios.post('http://localhost:3000/login', {
          user: {
              email: email,
              password: password
          }
      }).then(response => {
          localStorage.setItem('usertoken', response.data)
          return response.data;
      }).then(res => {
          if (res) {
            this.props.history.push(`/users`)
          }})
          .catch( error=> {
          console.log('login error', error)
      })
      event.preventDefault();
  }

  handleChange(event) {
      this.setState({
          [event.target.name]: event.target.value
      })
  }

  render() {
    const {
        email, 
        password, 
    } = this.state;
    return (
      <React.Fragment>
        <h2 style={{padding: 25}}>Sing in</h2>
        <div className='register-form'>
          <form  onSubmit = { this.handleSubmit }>
            <div className='form-group'>
              <label htmlFor='exampleInputEmail1'>Email address</label>
              <input 
                type='email' 
                name='email' 
                className='form-control'
                placeholder='Email' 
                value={email} 
                onChange={this.handleChange}  
              />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputEmail1'>Password</label>
              <input 
                type='password' 
                name='password' 
                className='form-control'
                placeholder='Password' 
                value={password} 
                onChange={this.handleChange}
              />
            </div>
            <button type='submit' className='btn btn-primary'>Sing in</button>
          </form>
        </div>
      </React.Fragment>
    )
  }
}