import React, { Component } from 'react';
import axios from 'axios'


export class Registration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      name, 
      email, 
      password, 
    } = this.state;
    axios.post('http://localhost:3000/register', {
      user : {
          name,
          email,
          password,
      }
    }).then(res => {
      if (res) {
          this.props.history.push(`/login`)
      }
    })
      
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const {
      name, 
      email, 
      password, 
    } = this.state;
  
    return (
      <React.Fragment>
        <h2 style={{padding: 25}}>Register</h2>
        <div className='register-form'>
          <form  onSubmit = { this.handleSubmit }>
            <div className='form-group'>
              <label htmlFor='exampleInputEmail1'>Name</label>
              <input 
                type='text' 
                name='name' 
                className='form-control'
                placeholder='Name' 
                value={name} 
                onChange={this.handleChange}  
              />
            </div>
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
            <button type='submit' className='btn btn-primary'>Register</button>
          </form>
        </div>
      </React.Fragment>  
    )
  }
}

