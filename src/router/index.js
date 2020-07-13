import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../pages/App'
import About from '../containers/about'
import store from '../store';

function AppRouter() {
    return (
        <Provider store={store}>
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/about" component={About} />
                </Switch>
            </Router>
        </Provider>
    )
}

export default AppRouter;