import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch} from 'react-router-dom';
import {Route} from 'react-router';
import {NotFound} from './pages/NotFound';

if (module.hot) {
  module.hot.accept()
}

const prefixLanguage = location.pathname.split('/')[1] || ''

async function render(): Promise<void> {
  const {Home} = await import(/* webpackChunkName: "home" */ './pages/Home')
  const root = document.getElementById('root')

  ReactDOM.render((
    <BrowserRouter>
      <Switch>
        <Route path={`/${prefixLanguage}`} component={Home}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  ), root)
}

render()
