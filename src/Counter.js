import React, { useState, useEffect } from 'react'

// const waitFor = ms => new Promise(resolve => setTimeout(resolve, ms))

// const coinFlip = () => Math.floor(Math.random() * 10) % 2 === 0

import './Counter.css'
const Counter = () => {
  const [counter, setCounter] = useState(0)
  const [counterInput, setCounterInput] = useState(0)
  useEffect(() => {
    document.title = `Counter: ${counter}`
  }, [counter]) // <- With the array, will not run every render, only on first render
  const handleSubmit = evt => {
    evt.preventDefault()
    if (counterInput !== '') setCounter(counterInput)
  }
  const handleChange = evt => {
    const { value } = evt.target
    if (Number(value)) setCounterInput(Number(value))
    else if (value === '') setCounterInput('')
  }
  return (
    <div id="counter">
      <h1>Counter: {counter}</h1>
      <div className="buttons">
        <button type="button" onClick={() => setCounter(counter - 1)}>
          -
        </button>
        <button type="button" onClick={() => setCounter(counter + 1)}>
          +
        </button>
      </div>
      <form className="counter-form" onSubmit={handleSubmit}>
        <input
          name="counterInput"
          onChange={handleChange}
          value={counterInput}
        />
        <button type="submit">Set</button>
      </form>
    </div>
  )
}

export default Counter
