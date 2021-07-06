import { useContext } from 'react';

import AuthContext from '../../context/AuthContext';

import useForm from '../../hooks/useForm';

const initialUser = {
  username: '',
  password: '',
};

const Login = () => {
  const { form, handleInputChange } = useForm(initialUser);
  const { username, password } = form;

  const { login } = useContext(AuthContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!username || !password) {
      console.log('Debe ingresar el nombre de usuario o contraseña.');
      return;
    }

    login({ username, password });
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1>Ingresar</h1>
        <form className="login__container-form" onSubmit={handleSubmit}>
          <input
            name="username"
            type="text"
            placeholder="Nombre de usuario/Email"
            value={username}
            onChange={handleInputChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={handleInputChange}
          />
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
