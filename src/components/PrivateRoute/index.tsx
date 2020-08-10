import React from 'react';
import { Route, RouteProps , Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../utils/isAuthenticated';

interface PrivateRouteProps extends RouteProps{
  component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component, ...rest
}) => (
  <Route 
    {...rest}
    render={ props => isAuthenticated()
      ? (<Component {...props} />)
      : (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
    }
  />
);

export default PrivateRoute;