import React from 'react'
import ReactDOM from 'react-dom'

if (module.hot) {
  module.hot.accept()
}

const Home = () => (
  <div>
    <h2>Home !!!</h2>
  </div>
)

ReactDOM.render(
  <Home />,
  document.getElementById('root')
)
