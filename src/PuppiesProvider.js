import React, { useReducer } from 'react'

export const PuppiesContext = React.createContext()

const initialPuppies = [
  {
    id: 1,
    name: 'Finn'
  },
  {
    id: 2,
    name: 'Priti'
  },
]

const ADD_PUPPY = 'ADD_PUPPY'
const DELETE_PUPPY = 'DELETE_PUPPY'

export const addPuppy = puppy => ({
  type: ADD_PUPPY,
  puppy,
})

export const deletePuppy = puppyId => ({
  type: DELETE_PUPPY,
  puppyId,
})

const nextId = arr => {
  if (!arr.length) return 1
  return (
    1 +
    arr.reduce((highest, item) => {
      return item.id > highest ? item.id : highest
    }, -Infinity)
  )
}

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_PUPPY: {
      const newPuppy = {
        name: action.puppy,
        id: nextId(state),
      }
      return [...state, newPuppy]
    }
    case DELETE_PUPPY: {
      return state.filter(puppy => puppy.id !== action.puppyId)
    }
    default:
      return state
  }
}

/* ☢️ MUTATES AN ARRAY. REACT COMPONENTS WILL NOT KNOW TO RE-RENDER */
// const puppiesContext = {
//   puppies: initialPuppies,
//   addPuppy: function(name) {
//     console.log('this', this)
//     this.puppies.push({
//       id: nextId(this.puppies),
//       name,
//     })
//   },
// }
// puppiesContext.addPuppy = puppiesContext.addPuppy.bind(puppiesContext)

const PuppiesProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialPuppies)
  return (
    <PuppiesContext.Provider value={{ state, dispatch }}>
      {props.children}
    </PuppiesContext.Provider>
  )
}

export default PuppiesProvider
