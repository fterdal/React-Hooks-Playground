import React, { useState, useContext } from 'react'
import { PuppiesContext } from './Puppies'

const PuppyForm = () => {
  const { addPuppy } = useContext(PuppiesContext)
  const [name, setName] = useState('')
  const handleSubmit = evt => {
    evt.preventDefault()
    addPuppy(name)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        name="name"
        onChange={(evt) => setName(evt.target.value)}
      />
      <button type="submit">Add Puppy</button>
    </form>
  )
}

export default PuppyForm
