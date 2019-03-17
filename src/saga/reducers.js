import { combineReducers } from 'redux'

const initState = {
  list: [],
  count: 1,
}

const usersReducer = function (state = initState, action) {
  switch (action.type) {
    case 'getList':
      return { ...state, list: action.list }
    case 'removeUser':
      return { ...state, list: state.list.filter(i => i.id !== action.id) }
    case 'increment':
      return { ...state, count: state.count + action.num }
    case 'reduce':
      return { ...state, count: state.count - action.num }
    default:
      return state
  }
}

export default combineReducers({
  users: usersReducer
})