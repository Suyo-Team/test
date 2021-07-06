import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import AuthContext from '../context/AuthContext';

import { loginUser, registerUser } from '../services/auth';

const initialUser = () => JSON.parse(localStorage.getItem('user')) || { logged: false };

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);

  const login = (userToLogin) => {
    const { username: loginName, password } = userToLogin;
    const isEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const loggedUser = isEmail.test(loginName) ? { email: loginName, password } : userToLogin;
    loginUser(loggedUser)
      .then((userDB) => {
        if (userDB) {
          const { username, token } = userDB;
          setUser({
            username,
            token,
            isLogged: true,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const logout = () => setUser({ isLogged: false });

  const register = (userToRegister) => {
    registerUser(userToRegister)
      .then((userDB) => {
        console.log(userDB);
        if (userDB) {
          const { username, token } = userDB;
          setUser({
            username,
            token,
            isLogged: true,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthProvider;
