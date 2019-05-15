import React, { useContext } from 'react'
import { PuppiesContext } from './PuppiesProvider'
import PuppyItem from './PuppyItem'

// NOTE that now, the component re-renders because the state from PuppiesContext
// is different. Not just mutated, but actually a different object
const PuppyList = () => {
  const { state: puppies } = useContext(PuppiesContext)
  return (
    <div>
      {puppies.length ? (
        <ul>
          {puppies.map(puppy => (
            <PuppyItem key={puppy.id} puppy={puppy} />
          ))}
        </ul>
      ) : (
        <div>No puppies 😢</div>
      )}
    </div>
  )
}

export default PuppyList
