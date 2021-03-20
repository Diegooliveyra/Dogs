import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GET_USER, TOKEN_POST } from '../../Api/api';
import useForm from '../../Hooks/useForm';
import Button from '../Button/Button';
import Input from '../Input/Input';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    getUser(token);
  }, []);

  const getUser = async (token) => {
    const { url, options } = GET_USER(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });
      const response = await fetch(url, options);
      const json = await response.json();
      window.localStorage.setItem('token', json.token);
      getUser(json.token);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      ,<Link to="/login/create">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
