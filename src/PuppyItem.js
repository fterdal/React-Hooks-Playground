import React, { useContext } from 'react'
import { PuppiesContext } from './PuppiesProvider'

// NOTE that now, the component re-renders because the state from PuppiesContext
// is different. Not just mutated, but actually a different object
import './PuppyItem.css'
const PuppyItem = (props) => {
  // const { dispatch } = useContext(PuppiesContext)
  const { puppy: { name } } = props
  return (
    <div className="puppy-item">
      {name}
    </div>
  )
}

export default PuppyItem
