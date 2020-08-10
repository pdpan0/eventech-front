import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//Components
import PrivateRoute from './components/PrivateRoute';
//Pages
import Landing from './pages/Landing';
import User from './pages/User';
import RegisterUser from './pages/Register/User';
import Company from './pages/Company';
import RegisterCompany from './pages/Register/Company';
import Event from './pages/Event';
import RegisterEvent from './pages/Register/Event';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

const Routes: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <PrivateRoute path="/user" component={User}/>
        <Route path="/register/user" component={RegisterUser}/>
        <PrivateRoute path="/company" component={Company} />
        <Route path="/register/company" component={RegisterCompany} />
        <Route path="/event/:id" component={Event} />
        <PrivateRoute path="/register/event" component={RegisterEvent} />
        <Route path="/login" component={Login} />
        <Route path="*" component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
