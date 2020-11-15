
import {INCREMENT,GET_USER_INFO} from './constant'
import { userInfoReq } from '../services/index';
const initState = {
  userInfo: {}
}

//! 前后端交互写在actions
export const actions = {
  getUserInfo () {
    //这里我们需要发送数据请求
    return async dispatch => {
      dispatch({
        type: GET_USER_INFO,
        payload: await userInfoReq()
      })
    }
  }
  
}

export const reducer = (state=initState,action) => {
  const newState = JSON.parse(JSON.stringify(state))
  const {type,payload} = action 
  switch (type) {
    case GET_USER_INFO:
       console.log('payload',payload)
       newState.userInfo = payload.data.data 
      break;
  
    default:
      break;
  }
  return newState
}