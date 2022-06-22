/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useContext, useReducer } from 'react'
import PizzaReducer from './PizzaReducer'

const PizzaContext = createContext()

export function usePizzaContext() {
  return useContext(PizzaContext)
}

export function PizzaProvider({ children }) {

  const initialState = {
     perPersonSlice: '',
     totalPeople: '',
     totalSlice: '',
     pizza: ''
  }

  const [state, dispatch] = useReducer(PizzaReducer, initialState)

    //clearUser state
    const clearUser = ()=>dispatch({type : 'REMOVE_USERS'})

    const getPeople=(e)=>{
        dispatch({type:'FIRST',
                        firstvalue :e.target.value})
    }


  const value = {
    getPeople,
  }

  return (
    <PizzaContext.Provider value={value}>{children}</PizzaContext.Provider>
  )
}

export default PizzaContext
