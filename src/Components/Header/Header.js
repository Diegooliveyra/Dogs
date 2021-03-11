import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => {
  return (
    <div className={style.header}>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="login">Login | Criar</Link>
        </li>
      </nav>
    </div>
  );
};

export default Header;
