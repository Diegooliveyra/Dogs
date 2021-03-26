import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as AdcionarFoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Estatistica } from '../../Assets/estatisticas.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);

  return (
    <nav>
      <NavLink to="/conta">
        <MinhasFotos />
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Estatistica />
      </NavLink>
      <NavLink to="/conta/postar">
        <AdcionarFoto />
      </NavLink>
      <button onClick={userLogout}>
        <Sair />
      </button>
    </nav>
  );
};

export default UserHeaderNav;
