import React, { useState, useContext } from 'react'
import { PuppiesContext, addPuppy } from './PuppiesProvider'

const PuppyForm = () => {
  const { dispatch } = useContext(PuppiesContext)
  const [name, setName] = useState('')
  const handleSubmit = evt => {
    evt.preventDefault()
    dispatch(addPuppy(name))
    setName('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        name="name"
        onChange={(evt) => setName(evt.target.value)}
        value={name}
      />
      <button type="submit">Add Puppy</button>
    </form>
  )
}

export default PuppyForm
