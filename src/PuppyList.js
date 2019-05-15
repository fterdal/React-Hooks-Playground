import React, { useContext } from 'react'
import { PuppiesContext } from './PuppiesProvider'

// NOTE that even though the context is changing, the
// component will not re-render.
const PuppyList = () => {
  const { state: puppies } = useContext(PuppiesContext)
  // console.log('state', state)
  return (
    <div>
      <ul>
        {puppies.map(puppy => (
          <li key={puppy.id}>{puppy.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default PuppyList
