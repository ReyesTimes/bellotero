import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// R O U T E R
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from './views/App';
import CounterView from './views/Counter.js';

// T H E M E
import { ThemeProvider } from "styled-components";
import theme from "./theme.js";

// R E D U X
import { Provider } from 'react-redux';
import store from './store/index.js';

import Header from './components/Header.js';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <Header />
            <Redirect
              from="/"
              to="/page-1" 
            />
            <Switch>
              <Route exact path="/page-1" component={App} />
              <Route path="/page-2" component={CounterView} />
            </Switch>
          </Router>
        </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
