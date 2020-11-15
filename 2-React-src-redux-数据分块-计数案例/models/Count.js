
import {INCREMENT} from './constant'
const initState = {
  n: 0
}

export const actions = {
  increment () {
    //如果没有数据请求，我们actions中的方法，只用来创建动作
    return {
      type: INCREMENT
    }
  }
}

export const reducer = (state=initState,action) => {
  const newState = {...state}
  const {type} = action 
  switch (type) {
    case INCREMENT:
      newState.n++
      break;
  
    default:
      break;
  }
  return newState
}