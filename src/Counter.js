import React, { Fragment, useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const [counterInput, setCounterInput] = useState(0)
  const handleSubmit = evt => {
    evt.preventDefault()
    setCounter(counterInput)
  }
  const handleChange = evt => {
    const { value } = evt.target
    if (Number(value)) setCounterInput(Number(value))
    else if (value === '') setCounterInput('')
  }
  return (
    <Fragment>
      <h1>Counter: {counter}</h1>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        +
      </button>
      <button type="button" onClick={() => setCounter(counter - 1)}>
        -
      </button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="counterInput" />
        <input
          name="counterInput"
          onChange={handleChange}
          value={counterInput}
        />
        <button type="submit">Set</button>
      </form>
    </Fragment>
  )
}

export default Counter
