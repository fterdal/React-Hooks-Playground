import React from 'react'
import PuppyForm from './PuppyForm'
import PuppyList from './PuppyList'

export const PuppiesContext = React.createContext()

const initialPuppies = [
  {
    id: 1,
    name: 'Josh',
  },
  {
    id: 2,
    name: 'Tina',
  },
]

const nextId = arr => {
  return (
    1 +
    arr.reduce((highest, item) => {
      return item.id > highest ? item.id : highest
    }, -Infinity)
  )
}

const puppiesContext = {
  puppies: initialPuppies,
  addPuppy: function(name) {
    console.log('this', this)
    this.puppies.push({
      id: nextId(this.puppies),
      name,
    })
  },
}
puppiesContext.addPuppy = puppiesContext.addPuppy.bind(puppiesContext)

const Puppies = () => {
  return (
    <div>
      <PuppiesContext.Provider value={puppiesContext}>
        <PuppyForm /> {/* This */}
        <PuppyList />
      </PuppiesContext.Provider>
    </div>
  )
}

export default Puppies
