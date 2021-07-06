import { useState } from 'react';

import AuthenticationMenu from './AuthenticationMenu';
import Login from './Login';
import Register from './Register';

import '../../styles/Authentication.css';

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleChange = () => setIsLogin(!isLogin);

  return (
    <div className="auth">
      <div className="auth__container">
        <Login />
        <Register />
        <AuthenticationMenu isLogin={isLogin} changeLoginStatus={handleChange} />
      </div>
    </div>
  );
};

export default Authentication;
