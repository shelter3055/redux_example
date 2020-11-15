import { INCREMENT } from './constant';
const initState = {
  count: 0
}
export default function reducer (state=initState,action) {
  const newState = {...state}
  const {type} = action 
  /* 
    * state就是初始化数据
      * 单一数据源
      * state只读
      * state修改是一个纯函数
  */
  switch (type) {
    case INCREMENT:
      newState.count ++
      console.log('newState',newState)
      break;
  
    default:
      break;
  }
  return newState
}