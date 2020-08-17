import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile'
import {Login} from './pages/Login';
import {Registration} from './pages/Registration'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path={'/'} component={Home} exact/>
          <Route path={'/login'} component={Login}/>
          <Route path={'/register'} component={Registration}/>
          <Route path={'/users'} render={() => localStorage.usertoken ? <Profile/> : <Home/>}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
