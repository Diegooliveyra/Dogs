import React from 'react';
import { Route, Routes } from 'react-router';
import style from './Login.module.css';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <section className={style.login}>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="create" element={<LoginCreate />} />
      </Routes>
    </section>
  );
};

export default Login;
