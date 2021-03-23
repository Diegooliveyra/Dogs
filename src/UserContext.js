import React, { createContext, useEffect, useState } from 'react';
import { GET_USER, TOKEN_POST, TOKEN_VALIDATE_POST } from './Api/api';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null); //seta um estado com os dados do usuario
  const [login, setLogin] = useState(null); //seta um estado boleano para saber se o usuario esta logado
  const [loading, setLoading] = useState(null); // seta um estado de loading
  const [error, setError] = useState(null); // seta um estado com um erro

  useEffect(() => {
    //Faz uma verificação se ja exite um token salvo no localstorage, sem sim, faz um auto login
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

  // função recebe o token e retorna um Json com os dados do usuario
  async function getUser(token) {
    const { url, options } = GET_USER(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  // Função recebe o username e password do usuario
  // verifica se esta correto, se sim amarzena  o token no localstorage
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

  // funcão limpa dos dados que forem setados no login
  async function userLogout() {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('token');
  }

  return (
    // esportar as funcões e estados do userContext
    <UserContext.Provider
      value={{ userLogin, data, userLogout, loading, error }}
    >
      {children}
    </UserContext.Provider>
  );
};
