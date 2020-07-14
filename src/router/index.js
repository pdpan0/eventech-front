import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import About from '../containers/about';
import store from '../store';
import Home from '../pages/Home';

function AppRouter() {
    return (
        <Provider store={store}>
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </Switch>
            </Router>
        </Provider>
    )
}

export default AppRouter;