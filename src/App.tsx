import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import {NotFound} from './pages/NotFound';
import {Home} from './pages/Home';

if (module.hot) {
  module.hot.accept()
}

const prefixLanguage = location.pathname.split('/')[1] || 'ko'
const root = document.getElementById('root')

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route path={`/${prefixLanguage}`} component={Home} />
      <Redirect from="" to={`/${prefixLanguage}`} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
), root)
