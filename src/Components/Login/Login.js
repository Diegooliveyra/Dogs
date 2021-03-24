import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import style from './Login.module.css';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import { UserContext } from '../../UserContext';

const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
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
