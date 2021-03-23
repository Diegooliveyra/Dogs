import React, { createContext, useEffect, useState } from 'react';
import { GET_USER, TOKEN_POST, TOKEN_VALIDATE_POST } from './Api/api';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function autologin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Tokin Invalido');
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }
    autologin();
  }, []);

  async function getUser(token) {
    const { url, options } = GET_USER(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }
  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Error: Usuário ou senha inválida`);
      const { token } = await response.json();
      window.localStorage.setItem('token', token);
      await getUser(token);
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  async function userLogout() {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('token');
  }

  return (
    <UserContext.Provider
      value={{ userLogin, data, userLogout, loading, error }}
    >
      {children}
    </UserContext.Provider>
  );
};
