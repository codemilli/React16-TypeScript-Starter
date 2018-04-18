import React from 'react';
import ReactDOM from 'react-dom'

if (module.hot) {
  module.hot.accept()
}

async function render(): Promise<void> {
  const {Home} = await import('./pages/Home')

  ReactDOM.render(
    <Home title={"App"} />,
    document.getElementById('root')
  )
}

render()
