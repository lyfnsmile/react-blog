import { combineReducers } from 'redux'
import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions/action'

//选择用户后，将state.selectedUser设为所选选项
function selectedUser(state = 'lyfnsmile', action) {
  console.log(action)
  switch (action.type) {
    case REQUEST_POSTS:
      return action.user
    default:
      return state
  }
}

function posts(state = {}, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state)
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        data: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

//将两个reducer合并成一个reducer
const rootReducer = combineReducers({
  selectedUser
})

export default rootReducer
