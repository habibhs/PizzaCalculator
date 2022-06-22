
const PizzaReducer = (state, action) => {
    switch (action.type) {
      case 'FIRST':
        return {
          ...state,
          totalPeople: firstvalue,
        }
      case 'SET_LOADING':
        return {
          ...state,
          loading: false,
        }
        case 'REMOVE_USERS':
          return {
            ...state,
            users: []
          }
      default:
        return state
    }
  }
  
  export default PizzaReducer
  