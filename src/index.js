import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import Counter from './Counter'
import PuppiesProvider, { PuppiesContext } from './PuppiesProvider'
import KittensProvider, { KittensContext } from './KittensProvider'
import PuppyForm from './PuppyForm'
import PuppyList from './PuppyList'

const RandomThing = () => {
  // useContext(PuppiesContext)
  return <div>{'Random Thing:' + new Date()}</div>
}

import './index.css'
const App = () => {
  return (
    <div id="container">
      <Counter />
      <PuppiesProvider>
        <KittensProvider>
          <div className="puppy-container">
            <RandomThing />
            <PuppyForm />
            <PuppyList />
          </div>
        </KittensProvider>
      </PuppiesProvider>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
