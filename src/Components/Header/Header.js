import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import { UserContext } from '../../UserContext';
import { ReactComponent as Logo } from '../../Assets/dogs.svg';

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <header className={style.header}>
      <nav className={`${style.nav} + container`}>
        <li>
          <Link className={style.logo} to="/">
            <Logo />
          </Link>
        </li>
        <li>
          {data ? (
            <Link className={style.login} to="conta">
              {data.username}
            </Link>
          ) : (
            <Link className={style.login} to="login">
              Login | Criar
            </Link>
          )}
        </li>
      </nav>
    </header>
  );
};

export default Header;
