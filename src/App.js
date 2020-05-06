import React, { useState } from 'react';
import {
  Route
} from "react-router-dom";

import Login from './pages/Login/Login'
import Home from './pages/Home/Home'

import './App.css';

const App = () => {
  const [isAuthorize, setIsAuthorize] = useState(false);
  const [data, setData] = useState(
    {
      login: '',
      password: '',
      repeatPassword: '',
      email: '',
      userName: ''
    }
  );

  let login = () => {
    if (data.login.length > 3 && data.password.length > 3) {
      setIsAuthorize(true);
    }
  }

  let onChangeDataLogin = (value, name) => {
    setData({
      ...data,
      [name]: value
    })
  }

  return (
    <div className="wrapper content">
      <Route exact path="/login" render={() => (
        <Login
          login={login}
          onChangeDataLogin={onChangeDataLogin}
          isAuthorize={isAuthorize}
        />
      )} />
      <Route exact path="/home" render={() => (
        <Home />
      )} />
    </div>
  );
}

export default App;
