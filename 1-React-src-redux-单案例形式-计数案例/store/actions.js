//! actions用于定义动作 
import { INCREMENT } from './constant';
import store from './index'
export default {
  increment () {
    //创建动作，发送动作
    const action = {
      type: INCREMENT
    }
    //store通过dispatch发送来发送动作
    store.dispatch(action)
  }
}