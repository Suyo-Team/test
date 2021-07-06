import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, isLogged, ...args }) => (
  <Route
    {...args}
    component={(props) => (
      isLogged
        ? <Component {...props} />
        : <Redirect to="/login" />
    )}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default PrivateRoute;
