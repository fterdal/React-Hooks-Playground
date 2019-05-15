import React, { useContext } from 'react'
import { PuppiesContext, deletePuppy } from './PuppiesProvider'

// NOTE that now, the component re-renders because the state from PuppiesContext
// is different. Not just mutated, but actually a different object
import './PuppyItem.css'
const PuppyItem = props => {
  const { dispatch } = useContext(PuppiesContext)
  const { puppy } = props
  const handleDeletePuppy = () => {
    dispatch(deletePuppy(puppy.id))
  }
  return (
    <div className="puppy-item">
      <p>{puppy.name}</p>
      <button onClick={handleDeletePuppy} type="button">❌</button>
    </div>
  )
}

export default PuppyItem
