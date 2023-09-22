import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './sign_up.css'
const Sign_up = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Отправка данных регистрации на сервер
    const data = {
      username: login,
      email: email,
      password: password,
    };

    fetch('http://192.168.0.107:8000/auth/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
  
        // Обработка успешной регистрации
      })
      .catch((error) => {
        // Обработка ошибок
      });
  };

  return (
    <div className="reg_main">
      <>
        <h1>Зарегистрироваться</h1>
        <h2>Уже есть аккаунт? <Link to ="/log_in">Войти</Link></h2>
        <form onSubmit={handleSubmit}>
          <input type="text" value={login} onChange={handleLoginChange} placeholder="Login" />
          <input type="email" value={email} onChange={handleEmailChange} placeholder="Эл.почта" />
          <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
          <button type="submit">Зарегистрироваться</button>
        </form>
      </>
    </div>
  );
};

export default Sign_up;
