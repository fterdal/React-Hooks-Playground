import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './Counter'

import './index.css'
const App = () => {
  return (
    <div id="container">
      <Counter />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
