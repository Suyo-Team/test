import { useContext } from 'react';

import AuthContext from '../../context/AuthContext';

import useForm from '../../hooks/useForm';

const initialUser = {
  username: '',
  email: '',
  password: '',
};

const Register = () => {
  const { form, handleInputChange } = useForm(initialUser);
  const { username, email, password } = form;

  const { register } = useContext(AuthContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!username || !email || !password) {
      console.log('Debe ingresar el nombre de usuario o contraseña.');
      return;
    }

    register({ username, email, password });
  };

  return (
    <div className="register">
      <div className="register__container">
        <h1>Registro de cuenta</h1>
        <form className="register__container-form" onSubmit={handleSubmit}>
          <input
            name="username"
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={handleInputChange}
          />
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleInputChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={handleInputChange}
          />
          <button type="submit">Registrar</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
