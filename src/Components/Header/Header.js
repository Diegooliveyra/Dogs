import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import { ReactComponent as Logo } from '../../Assets/dogs.svg';

const Header = () => {
  return (
    <header className={style.header}>
      <nav className={`${style.nav} + container`}>
        <li>
          <Link className={style.logo} to="/">
            <Logo />
          </Link>
        </li>
        <li>
          <Link className={style.login} to="login">
            Login | Criar
          </Link>
        </li>
      </nav>
    </header>
  );
};

export default Header;
