import React from 'react'
import ReactDOM from 'react-dom'
// import Counter from './Counter'
import PuppiesProvider from './PuppiesProvider'
import PuppyForm from './PuppyForm'
import PuppyList from './PuppyList'

import './index.css'
const App = () => {
  return (
    <div id="container">
      {/* <Counter /> */}
      <PuppiesProvider>
        <div className="puppy-container">
          <PuppyForm />
          <PuppyList />
        </div>
      </PuppiesProvider>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
