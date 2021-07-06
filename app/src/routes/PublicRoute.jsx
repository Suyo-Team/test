import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = ({ component: Component, isLogged, ...args }) => (
  <Route
    {...args}
    component={(props) => (
      !isLogged
        ? <Component {...props} />
        : <Redirect to="/" />
    )}
  />
);

PublicRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default PublicRoute;
