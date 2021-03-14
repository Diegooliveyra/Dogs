import React from 'react';
import style from './Input.module.css';

const Input = ({ label, type, name }) => {
  return (
    <div className={style.wrapper}>
      <label htmlFor={name} className={style.label}>
        {label}
      </label>
      <input id={name} name={name} type={type} className={style.input} />
      <p className={style.error}>Preencha um valor</p>
    </div>
  );
};

export default Input;
