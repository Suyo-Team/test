import { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import DashboardRoutes from './DashboardRoutes';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import Authentication from '../components/Authentication/Authentication';

import AuthContext from '../context/AuthContext';

const AppRouter = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/login" component={Authentication} isLogged={user.isLogged} />
        <PrivateRoute path="/" component={DashboardRoutes} isLogged={user.isLogged} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
