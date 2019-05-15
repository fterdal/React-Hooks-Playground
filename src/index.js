import React from 'react'
import ReactDOM from 'react-dom'
// import Counter from './Counter'
import Puppies from './Puppies'

import './index.css'
const App = () => {
  return (
    <div id="container">
      {/* <Counter /> */}
      <Puppies />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
