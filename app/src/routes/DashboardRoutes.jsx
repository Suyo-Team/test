import { Switch, Route } from 'react-router-dom';

import Home from '../components/Home/Home';
import Navbar from '../components/Navbar';
import NotFound from '../components/NotFound';

const DashboardRoutes = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </>
);

export default DashboardRoutes;
