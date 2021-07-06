import { useContext } from 'react';

import AuthContext from '../context/AuthContext';

import '../styles/Navbar.css';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="nav">
      <h1>{user.username}</h1>
      <button type="button" onClick={logout}>Salir</button>
    </nav>
  );
};

export default Navbar;
