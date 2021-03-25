import React, { useContext } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import useForm from '../../Hooks/useForm';
import Error from '../Helper/Error';
import { USER_POST } from '../../Api/api';
import { UserContext } from '../../UserContext';
import useFetch from '../../Hooks/useFetch';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const { userLogin } = useContext(UserContext);
  const { error, loading, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) await userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastra-se</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
