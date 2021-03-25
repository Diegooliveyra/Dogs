import { useState } from 'react';

//Objeto com os tipos de validaçoes, regex e mensagem de erro
const types = {
  email: {
    regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    message: 'Preencha um email valido',
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      'A senha deve conter pelo menos um dígito, uma letra minúscula, uma letra maiúscula, e no minimo 8 caracteres',
  },
};

const useForm = (type) => {
  const [value, setValue] = useState(''); // Seta um estado para o valor digitado nos inputs
  const [error, setError] = useState(null); // seta um erro conforme valor digitado nos inputs

  function validate(value) {
    if (type === false) return true; // caso a valição receba false como parametro, ele n faz a validação
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }
  // faz a validação conforme ocorram eventos de onCHnage nos inputs, seta os dados no setValue
  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
