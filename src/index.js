// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './redux/store';
import CartContainer from './components/Cart';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path='/' component={CartContainer} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
