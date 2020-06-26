import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// R O U T E R
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Testimonial from './views/Testimonial';
import Calculator from './views/Calculator.js';

// T H E M E
import { ThemeProvider } from "styled-components";
import theme from "./theme.js";

// R E D U X
import { Provider } from 'react-redux';
import store from './store/store.js';

// C O M P O N E N T S
import Header from './components/Header.js';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <Header />
            <Switch>
              <Route path="/page-1" component={Testimonial} />
              <Route path="/page-2" component={Calculator} />
              <Redirect
                from="/"
                to="/page-1"
                exact
              />
            </Switch>
          </Router>
        </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
  );
  
  /*<
    Redirect
    from="/"
    to="/page-1" 
  /> */
