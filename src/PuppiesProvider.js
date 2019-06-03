import React, { useReducer } from 'react'

/** REDUX, REACT HOOKS STYLE
 * This apprach is nice and clean, but as it stands, it lacks some essential
 * feature from Redux. In particular, I'd like these things:
 * - Middleware support (this is a big one)
 *   - logging
 *   - thunks
 * - combineReducers
 * - DevTools
 */

export const PuppiesContext = React.createContext()

// ACTION TYPES
const ADD_PUPPY = 'ADD_PUPPY'
const DELETE_PUPPY = 'DELETE_PUPPY'

// ACTION CREATORS
export const addPuppy = puppy => ({
  type: ADD_PUPPY,
  puppy,
})

export const deletePuppy = puppyId => ({
  type: DELETE_PUPPY,
  puppyId,
})

// JUST A HELPFUL FUNCTION 😄
const nextId = arr => {
  if (!arr.length) return 1
  return (
    1 +
    arr.reduce((highest, item) => {
      return item.id > highest ? item.id : highest
    }, -Infinity)
  )
}

// REDUCER
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

const initialPuppies = [
  {
    id: 1,
    name: 'Finn',
  },
  {
    id: 2,
    name: 'Priti',
  },
  {
    id: 3,
    name: 'Collin',
  },
]

// const initialState = {
//   puppies: initialPuppies,
//   counter: initialCounter,
// }

const PuppiesProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialPuppies)
  return (
    <PuppiesContext.Provider value={{ state, dispatch }}>
      {'PuppiesContext Provider:' + new Date()}
      {props.children}
    </PuppiesContext.Provider>
  )
}

export default PuppiesProvider
