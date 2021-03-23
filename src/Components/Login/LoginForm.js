import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Button from '../Button/Button';
import Input from '../Input/Input';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, data, loading, error } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
      console.log(data);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {error && <p>{error}</p>}
      </form>
      ,<Link to="/login/create">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
