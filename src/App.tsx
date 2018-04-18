import React from 'react';
import ReactDOM from 'react-dom'

if (module.hot) {
  module.hot.accept()
}

// Hello123 123 12312 3

async function render(): Promise<void> {
  const {Home} = await import(/* webpackChunkName: "home" */ './pages/Home')

  ReactDOM.render(
    <Home title={"App"} />,
    document.getElementById('root')
  )
}

render()
