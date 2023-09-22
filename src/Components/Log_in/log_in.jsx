import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './log_in.css'
const Log_in = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Создание экземпляра URLSearchParams
    const params = new URLSearchParams();
    params.append('username', login);
    params.append('password', password);
  
    // Отправка данных авторизации на сервер
    fetch('http://192.168.0.107:8000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(), // Преобразование параметров в строку
    })
      .then((response) => response.json())
      .then((data) => {
        const token = data.token;
        localStorage.setItem('jwt', token);

        // Обработка успешной авторизации
      })
      .catch((error) => {
        // Обработка ошибок
      });
  };

  return (
    <div className="reg_main">
      <h1>Войти</h1>
      <h2>Нет аккаунта? <Link to="/sign_up" replace>Зарегистрироваться</Link></h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={login} onChange={handleLoginChange} placeholder="Login" />
        <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
        <Link to ="/me">
        <button type="submit">Войти</button>
        </Link>
      </form>
    </div>
  );
};

export default Log_in;