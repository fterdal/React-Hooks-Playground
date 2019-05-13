import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import Counter from './Counter'

const App = () => {
  return (
    <Fragment>
      <Counter />
    </Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
