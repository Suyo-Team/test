import PropTypes from 'prop-types';

const AuthenticationMenu = ({ isLogin, changeLoginStatus }) => {
  const menuClasses = !isLogin ? 'auth__menu left' : 'auth__menu right';
  return (
    <div className={menuClasses}>
      <div className="auth__menu-container">
        <h1>{ !isLogin ? '¡Bienvenido!' : '¿Aún no tienes una cuenta?' }</h1>
        <p>
          {
            !isLogin
              ? 'Crea un cuenta nuevo en pocos pasos'
              : 'Si ya tienes una cuenta inicia con tus datos'
          }
          .
        </p>
        <button
          onClick={changeLoginStatus}
          type="button"
        >
          { !isLogin ? 'Iniciar Sesión' : 'Registrarse' }
        </button>
      </div>
    </div>
  );
};

AuthenticationMenu.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  changeLoginStatus: PropTypes.func.isRequired,
};

export default AuthenticationMenu;
