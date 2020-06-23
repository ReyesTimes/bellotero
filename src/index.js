import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// R O U T E R
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App';
import CounterView from './views/Counter.js';

// R E D U X
import { Provider } from 'react-redux';
import store from './store/index.js';

import Header from './components/Header.js';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/counter" component={CounterView} />
          </Switch>
        </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
