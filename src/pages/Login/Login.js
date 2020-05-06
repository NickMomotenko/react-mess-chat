import React, { useState } from 'react';

import './Login.scss';

import Input from '../../components/Input/Input.js'
import Button from '../../components/Button/Button';
import InfoPanel from '../../components/InfoPanel/InfoPanel';

const Login = (props) => {
  return (
    <div className="login">
      <div className="login__wrapper">
        <InfoPanel
          title="Войти в аккаунт"
          subtitle="Пожалуйста, войдите в свой аккаунт"
        />
        <LoginForm {...props} />
      </div>
    </div>
  );
}

export default Login;

const LoginForm = ({
  login,
  checkLoginData,
  onChangeDataLogin,
  isAuthorize
}) => {
  console.log(isAuthorize);
  

  return (
    <div className="login-form">
      <div className="login-form__content">
        {
          [
            { place: 'Логин', name: 'login' },
            { place: 'Пароль', name: 'password' }
          ].map(item => (
            <label key={`placeholder-${item.name}`} className="login-form__label">
              <Input
                place={item.place}
                name={item.name}

                onChangeDataLogin={onChangeDataLogin}
              />
            </label>
          ))
        }
        <div className="login-form__button">
          <Button title="Ввойти в аккаунт" fun={login} />
          <Button title="Зарегистрироваться" otherStyle fun={login} />
        </div>
      </div>
    </div>
  )
}
