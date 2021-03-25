import React, { useContext } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import useForm from '../../Hooks/useForm';
import { USER_POST } from '../../Api/api';
import { UserContext } from '../../UserContext';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const { userLogin } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const response = await fetch(url, options);
    if (response.ok) await userLogin(username.value, password.value);
    console.log(response);
  }

  return (
    <section className="animaleft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Cadastra-se</Button>
      </form>
    </section>
  );
};

export default LoginCreate;
