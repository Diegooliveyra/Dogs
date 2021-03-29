import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as AdcionarFoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Estatistica } from '../../Assets/estatisticas.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const [mobile, setMobile] = useState(false);

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end activeClassName={styles.active}>
        <MinhasFotos />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/conta/estatisticas" activeClassName={styles.active}>
        <Estatistica />
        {mobile && 'Estatisticas'}
      </NavLink>
      <NavLink to="/conta/postar" activeClassName={styles.active}>
        <AdcionarFoto />
        {mobile && 'Adcionar Foto'}
      </NavLink>
      <button onClick={userLogout}>
        <Sair />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
