import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import { UserContext } from '../../UserContext';
import styles from './Login.module.css';

const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
