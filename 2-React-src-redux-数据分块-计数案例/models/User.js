
import {INCREMENT,GET_USER_INFO} from './constant'
const initState = {
  userInfo: {}
}

export const actions = {
  getUserInfo () {
    return {
      type: GET_USER_INFO
    }
  }
  
}

export const reducer = (state=initState,action) => {
  const newState = {...state}
  const {type} = action 
  switch (type) {
    case GET_USER_INFO:
      // newState.n++
      break;
  
    default:
      break;
  }
  return newState
}