import React, { useReducer, useContext } from 'react'
import { PuppiesContext } from './PuppiesProvider'

export const KittensContext = React.createContext()

// ACTION TYPES
const ADD_KITTEN = 'ADD_KITTEN'
const DELETE_KITTEN = 'DELETE_KITTEN'

// ACTION CREATORS
export const addKitten = kitten => ({
  type: ADD_KITTEN,
  kitten,
})

export const deletekitten = kittenId => ({
  type: DELETE_KITTEN,
  kittenId,
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

// REDUCER
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_KITTEN: {
      const newKitten = {
        name: action.kitten,
        id: nextId(state),
      }
      return [...state, newKitten]
    }
    case DELETE_KITTEN: {
      return state.filter(kitten => kitten.id !== action.kittenId)
    }
    default:
      return state
  }
}

const initialKittens = [
  {
    id: 1,
    name: 'Ben',
  },
  {
    id: 2,
    name: 'Holly',
  },
  {
    id: 3,
    name: 'Brett',
  },
]

const KittenProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialKittens)
  return (
    <KittensContext.Provider value={{ state, dispatch }}>
      {'KittensContext Provider:' + new Date()}
      {props.children}
    </KittensContext.Provider>
  )
}

export default KittenProvider
