import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Error from '../Helper/Error';
import styles from './LoginForm.module.css';
import stylesBtn from '../Button/Button.module.css';

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
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to="/Login/perdeu">
        Perdeu a Senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/create">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
