import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {NotFound} from './pages/NotFound';
import {Home} from './pages/Home';

if (module.hot) {
  module.hot.accept()
}

const prefixLanguage = location.pathname.split('/')[1] || ''
const root = document.getElementById('root')

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route path={`/${prefixLanguage}`} component={Home} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
), root)
