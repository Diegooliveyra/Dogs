import React from 'react';
import style from './Footer.module.css';
import { ReactComponent as Dogs } from '../../Assets/dogs-footer.svg';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Dogs />
      <p>Dog. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
